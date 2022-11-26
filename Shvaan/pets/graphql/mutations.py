import strawberry
from graphql import GraphQLError

from pets.models import Pet
from pets.graphql.inputs.pet import PetInput

@strawberry.type
class PetManageMutations:

    @strawberry.mutation
    def add_new_pet(
            self, pet: PetInput,
    ) -> bool:
        if (
            pet.name is not None and
            pet.age is not None and
            pet.breed is not None and
            pet.current_owner_name is not None and
            pet.is_available is not None
        ):
            Pet.objects.create(
                name=pet.name,
                age=pet.age,
                breed=pet.breed,
                current_owner_name=pet.current_owner_name,
                is_available=pet.is_available,
            )
            return True
        raise GraphQLError("Invalid input")

    @strawberry.mutation
    def update_pet(
            self, pet: PetInput,
    ) -> bool:
        try:
            p = Pet.objects.get(id=pet.id)
        except Pet.DoesNotExist:
            return False
        if p.name is not None:
            p.name = pet.name
        if p.age is not None:
            p.age = pet.age
        if p.breed is not None:
            p.breed = pet.breed
        if p.current_owner_name is not None:
            p.current_owner_name = pet.current_owner_name
        if p.is_available is not None:
            p.is_available = pet.is_available
        p.save()
        return True

    @strawberry.mutation
    def delete_pet(
            self, id: int,
    ) -> bool:
        try:
            p = Pet.objects.get(id=id)
        except Pet.DoesNotExist:
            return False
        p.delete()
        return True