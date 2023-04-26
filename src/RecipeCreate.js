import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialData });

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ ...formData });
    setFormData({ ...initialData });
  };

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                onChange={handleChange}
                name="ingredients"
                rows={2}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <textarea
                id="preparation"
                onChange={handleChange}
                name="preparation"
                rows={2}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
