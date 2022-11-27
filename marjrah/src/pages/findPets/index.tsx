import React, {useEffect} from 'react';
import Banner from './Banner';
import Footer from './';
import ProductCard from "../../components/petCard";
import SortBar from "./sortBar";
import FilterBar from "../../components/filterBar";
import GraphQLFetch from "../../utils/graphqlFetch";


const FindPetsPage = () => {

    const [pets, setPets] = React.useState([]);
    const [error, setError] = React.useState(null);

    const QUERY = `
      query {
          pets{
            pets{
              id
              name
              age
              breed
            }
            count
            pages
          }
        }`;

    useEffect(() => {
        GraphQLFetch({
            query: QUERY,
        }).then((data) => {
            if (data.errors) {
                setError(data.errors);
            }
            else setPets(data.data.pets.pets);
        });
    }, []);

    return (
        <div className="flex flex-col items-center border-2 border-b-blue-800">
            <Banner/>
            <SortBar/>
            <div className="flex w-11/12">
                <div className="w-1/6">
                    <FilterBar/>
                </div>
                <div className="mt-6 w-5/6 items-center flex flex-wrap">
                    {pets.map((pet:any) => (
                        <ProductCard brand={pet.breed} name={pet.name}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FindPetsPage;