import React, { useState, useEffect } from "react";



const useFetchData = (productId) => {
    const [productData, setProductData] = useState([]);    
    // const [isLoading, setIsLoading] = useState(false);
    console.log(productId)

    const fetchData = async () => {
        const option = {
            method: "GET",
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
            },
        };
        // setIsLoading(true);
        const response = await fetch("https://apis.ccbp.in/products/" + productId, option);
        const data = await response.json();
        console.log("data", data);
        setProductData(data);
        // setIsLoading(false);   
    };

    useEffect(() => {
        fetchData();
    }, [productId]);

    return productData;
};

export default useFetchData;

 