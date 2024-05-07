import { useEffect } from "react";
import { getAllArticles } from "../utils/api";

function ArticleSearch({ setArticles, setIsError, setIsLoading }) {
  useEffect(() => {
    getAllArticles()
      .then((res) => {
        setIsLoading(false);
        console.log("res", res);
        setArticles(res.data.articles);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  return <div></div>;
}

export default ArticleSearch;
