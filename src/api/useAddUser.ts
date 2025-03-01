import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";
import { User } from "../types/user";

const BASE_URL = import.meta.env.VITE_API_URL;

type Args = {
  name: string;
  email: string;
  jobTitle: number;
}

const addUser = async (url: string, { arg } : { arg: Args }) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(arg),
    });
    if(response.status !== 200) {
      throw new Error('Failed to add user');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to add user: ${error}`);
  }
}

type Props = {
  options?: SWRMutationConfiguration<User, Error>;
}

export const useAddUser = ({ options }: Props = {}) => {
  return useSWRMutation('/users', addUser, options);
}

