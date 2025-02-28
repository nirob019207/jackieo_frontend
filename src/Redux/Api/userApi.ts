import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
    overrideExisting: true, 

    endpoints: (build) => ({
  
        applications: build.mutation({
            query: (data) => {
              return {
                url: "/applications",
                method: "POST",
                headers: {
                  "Content-Type": "application/json", 
                },
                body: data, 
              };
            },
          }),
          
    
        

       
    }),
})


export const { useApplicationsMutation} = userApi