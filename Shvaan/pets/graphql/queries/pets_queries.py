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
            per_page: Optional[int] = 20,
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
    def pet(
            self,
            id: int, keyword: Optional[str] = None,
    ) -> PetType:
        return PetType.objects.get(id=id)

    def filter_by_type(self, info, type: str) -> List[PetType]:
        return Pet.objects.filter(type=type)

    def actives(self):
        return Pet.objects.filter(is_active=True)

    def sort(self, info, sort: str) -> List[PetType]:
        return Pet.objects.order_by(sort)

    def search(self, info, keyword: str) -> List[PetType]:
        return Pet.objects.filter(name__icontains=keyword)

    def paginate(self, info, per_page: int, page_no: int) -> List[PetType]:
        paginator = Paginator(Pet.objects.all(), per_page)
        return paginator.page(page_no).object_list

    def paginate_and_sort(self, info, sort: str, per_page: int, page_no: int) -> List[PetType]:
        paginator = Paginator(Pet.objects.order_by(sort), per_page)
        return paginator.page(page_no).object_list

    def paginate_and_search(self, info, keyword: str, per_page: int, page_no: int) -> List[PetType]:
        paginator = Paginator(Pet.objects.filter(name__icontains=keyword), per_page)
        return paginator.page(page_no).object_list

    def paginate_and_sort_and_search(self, info, sort: str, keyword: str, per_page: int, page_no: int) -> List[PetType]:
        paginator = Paginator(Pet.objects.order_by(sort).filter(name__icontains=keyword), per_page)
        return paginator.page(page_no).object_list

    def paginate_and_filter_by_type(self, info, type: str, per_page: int, page_no: int) -> List[PetType]:
        paginator = Paginator(Pet.objects.filter(type=type), per_page)
        return paginator.page(page_no).object_list