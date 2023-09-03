import React from 'react';
import Container from '../../../Components/Shared/Container';
import CategoriesBox from './categoriesBox';
import { categories } from './categoriesData.js';

const Categories = () => {
    return (
        <Container>
            <div className='pt-4 px-2 flex items-center justify-between overflow-x-auto'>
                {
                    categories.map(items => <CategoriesBox label={items.label} icon={items.icon} key={items.label}></CategoriesBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;