import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-3 rounded p-5'>


            <div class="card mx-auto p-12 bg-base-100 shadow-xl px-3 m-1">
                <div class="card-body">
                    <h2 className='text-primary-focus text-2xl'><span style={{ color: "goldenRod" }}>What are the different ways to manage a state in a React application?</span></h2>
                    <p class=" text-2xl text-justify">We can manage a state in our react application in some of these ways below. we can manage a state in one or another component using useState hook. useState is used to set a state value of a state and get that value when the state is changed. Another way is , we have to use useEffect for handling side effects of the change of state.</p>

                </div>
            </div>
            <div class="card mx-auto p-12 bg-base-100 shadow-xl px-3 my-1">
                <div class="card-body">
                    <h2 className='text-primary-focus text-2xl'> <span style={{ color: "goldenRod" }}>What is a unit test? Why should write unit tests?</span></h2>
                    <p class=" text-2xl text-justify">One of the benefits of unit tests is that they isolate a function, class or method. Thus, the result is reliable code. Unit tests also change the nature of the debugging process. However, Unit test is a part of testing a software or project. It is a technic of software testing. When a developer finish a feature of a software then the developer can check if the unit is working or not by writing few codes named as unit test.</p>

                </div>

            </div>
            <div class="card mx-auto p-12 bg-base-100 shadow-xl px-3 my-1">
                <div class="card-body">
                    <h2 className=' text-2xl'><span style={{ color: "goldenRod" }}>How will you improve the performance of a React Application?</span></h2>
                    <p class=" text-2xl text-justify">As react is only a front end library, When we use state then it creates re-rendering for the react application project. That's one of the reason for performance get down. So we have to reduce unnecessary rendering for optimal performance by using react-hooks or DOM.When the data of some years or a huge amount of data is loaded in one place then it creates a rendering error or rendering time loading for that project. So we can use gradual render for certain part for optimal result and we can fix the optimization.</p>

                </div>

            </div>
            <div class="card mx-auto p-12 bg-base-100 shadow-xl px-3 my-1">
                <div class="card-body">
                    <h2 className='text-2xl'><span style={{ color: "goldenRod" }}>Why you do not set the state directly in React?</span></h2>
                    <p class=" text-2xl text-justify">When the state is set directly then its value will be static. Which means, we will not be able to change the state. We have to use a fixed state value by using this direct state. But if we need to change the state value then we should use useState hook</p>

                </div>

            </div>
            <div class="card mx-auto p-12 bg-base-100 shadow-xl px-3 my-1">
                <div class="card-body">
                    <h2 className=' text-2xl'><span style={{ color: "goldenRod" }}>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</span></h2>

                    <p class=" text-2xl text-justify">The code is provided in below:<br />
                        const result = array.filter(product ⇒ product.name.includes('serachKeyWords')).map(pd ⇒  pd.name);
                        console.log(result);
                    </p>

                </div>

            </div>
        </div>

    );
};

export default Blogs;