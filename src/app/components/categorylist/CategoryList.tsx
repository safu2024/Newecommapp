import React from "react";
import { CategoryServices } from "../../services/Category-services";
import "./CategoryList.css";
import Link from "next/link";

export default async function CategoryList() {
  const data = await CategoryServices.getCategories();
  const categories = data.data;

  return (
    <div>
      <ul className="catbox">
        {categories.map((category: any) => (
          <li key={category.documentId} className="box">
            <Link href={`/products/category/${category.name}`}>
              <img
                src={CategoryServices.getImageUrl(category)}
                alt={category.title}
              />
            </Link>

            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
