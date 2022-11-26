from django.core.paginator import Paginator
from typing import List, Optional
import strawberry

from pets.models import Pet
from pets.graphql.types.pets_types import PetType, PetsType

@strawberry.type
class PetsQuery:

    @strawberry.field
    def pets(self, info,
            keyword: Optional[str] = None,
            category: Optional[str] = None,
            sort: Optional[str] = None,
            per_page: Optional[int] = 10,
            page_no: Optional[int] = 1,) -> PetsType:
        pets = Pet.objects.all()
        if keyword is not None:
            pets = pets.filter(name__icontains=keyword)
        if category is not None:
            pets = pets.objects.filter(category=category)
        if sort is not None:
            pets = pets.order_by(sort)
        paginator = Paginator(pets, per_page)

        return PetsType(
            pets=paginator.page(page_no).object_list,
            count=paginator.count,
            pages=paginator.num_pages
        )

    @strawberry.field
    def product(
            self,
            id: int,
    ) -> PetType:
        return PetType.objects.get(id=id)