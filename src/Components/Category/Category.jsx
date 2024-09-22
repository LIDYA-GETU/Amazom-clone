import React from 'react'
import { categoryInfos } from "./CategoryInfo";
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'
function Category() {
  return (
    <div>
      <section className={classes.category_container}>

        {categoryInfos?.map((infos) => {
         return <CategoryCard data={infos} />;
        })}
      </section>
    </div>
  );
}

export default Category

