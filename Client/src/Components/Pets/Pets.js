import React, { useEffect, useState } from "react";
import PetsViewer from "./PetsViewer";
import { useAuthContext } from "../../hooks/UseAuthContext";
import axiosInstance from "../../axiosInstance";

const Pets = () => {
  const [filter, setFilter] = useState("all");
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchRequests = async () => {
      if (!user || !user.token) {
        setError('User is not authenticated');
        setLoading(false);
        return;
      }
      try {
        const response = await axiosInstance.get('/approvedPets', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        const data = response.data;
        if (Array.isArray(data)) {
          setPetsData(data);
          setError(null);
        } else {
          throw new Error('Fetched data is not an array');
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching the data');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user]);

  const filteredPets = Array.isArray(petsData) ? petsData.filter((pet) => {
    if (filter === "all") {
      return true;
    }
    return pet.type === filter;
  }) : [];

  return (
    <>
      <div className="filter-selection">
        <select
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
          <option value="Rabbit">Rabbits</option>
          <option value="Bird">Birds</option>
          <option value="Fish">Fish</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="pet-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : filteredPets.length > 0 ? (
          filteredPets.map((petDetail, index) => (
            <PetsViewer pet={petDetail} key={index} />
          ))
        ) : (
          <p className="oops-msg">Oops!... No pets available</p>
        )}
      </div>
    </>
  );
};

export default Pets;
