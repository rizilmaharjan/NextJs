import { useEffect, useState } from "react";

type Data = {
  list: {
    word: string;
    definition: string;
    permalink: string;
  }[];
};

export const FetchData = (urls: string) => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const url = urls;

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "b4a4353689msh9a63c61d5b36c90p176047jsnaf301a4efec5",
          "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, [urls]);

  return { data, error };
};
