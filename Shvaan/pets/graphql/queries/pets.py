from django.core.paginator import Paginator
from typing import List, Optional
import strawberry

from pets.models import Pet
from pets.graphql.types import PetType

@strawberry.type
class PetsQuery:

    @strawberry.field
    def pets(self, page: Optional[int] = None, page_size: Optional[int] = None) -> List[PetType]:
        pets = Pet.objects.all()
        paginator = Paginator(pets, page_size)
        return PetType(
            petss = paginator.get_page(page).object_list,
            count = paginator.count,
            pages = paginator.num_pages,
        )
