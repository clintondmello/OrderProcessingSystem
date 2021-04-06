import axios from "axios";

const BASE_URL = "http://localhost:54681/api/";

export const ENDPIONTS = {
  CUSTOMER: "Customers",
  FOODITEM: "FoodItems",
  ORDER: "Orders",
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + endpoint + "/";
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newRecord) => axios.post(url, newRecord),
    update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
};
