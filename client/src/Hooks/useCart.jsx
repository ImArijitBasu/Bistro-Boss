import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//todo : tanstack query------------------------------>
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth();
    const { refetch, data : cart = []} = useQuery({
        queryKey: ['cart' , user?.email], //! should be a unique name
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart , refetch]
};

export default useCart;