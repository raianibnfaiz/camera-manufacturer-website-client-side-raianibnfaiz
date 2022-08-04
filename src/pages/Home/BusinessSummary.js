import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='font-bold'>Our Latest <span style={{ color: "tomato" }}>Business</span>  Summary</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow mt-5">

                <div class="stat">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div class="stat-title">Page Views</div>
                    <div class="stat-value text-secondary-focus">2.6M</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>


                <div className="stat">
                    <div className="stat-title">Annual Revenue</div>
                    <div className="stat-value text-primary-focus">10M+ $</div>
                    <div className="stat-desc">Jan 1st 2021 - Jan 1st 2022</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Customers</div>
                    <div className="stat-value text-secondary-focus">1,100+</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;