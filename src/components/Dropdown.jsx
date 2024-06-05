import React, { useState } from 'react';

const dropdowns = [
  {
    title: 'Accurate Demand Forecasting',
    content: 'Dynamically predict future demand across all channels, with high accuracy and lowest granularity. CleverBooks takes into account what traditional forecasts don\'t: trends, real-time market signals, promotional activities, and even logistics disruptions.',
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp',
  },
  {
    title: 'HELIX: Workflow Automation',
    content: 'Build and automate custom S&OP workflows to enhance productivity and streamline your processes. CleverBooks helps you get a bird eye view of your supply chain,and help you do things a spreadsheet never can',
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-800.webp',
  },
  {
    title: 'Automated Purchase Planning',
    content: 'Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. Whats more,CleverBooks improves with every planning cycle as the data set gets richer.',
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bd0e4b4b78267e66b04_Purchase%20planning-p-800.webp',
  },
  {
    title: 'Automated Distribution Planning',
    content: 'Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.',
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d89a9ea3f05_distribution%2520planning%2520type-2%2520-p-800.webp',
  },
  {
    title: 'Easy Integration',
    content: 'From all online store solutions to cloud ERPs, CleverBooks integrates seamlessly with your current tech and ops stack. Whats more? Connecting them to CleverBooks will give you actionable insights.',
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3395ea3f06_integration%20type-2.webp',
  },
  {
    title: 'Custom Dashboards',
    content: 'Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.',
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64366b9b4373ee32f68ac19c_dashboard%20ss-p-800.webp',
  },
  {
    title: 'Consensus Planning',
    content: 'Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning',
    image: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6634db1d80804c8f875b196c_consen%20home%20-p-800.png',
  },
  
];

const Dropdown = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        {dropdowns.map((dropdown, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => setActiveIndex(index)}
              className={`text-left w-full p-4 ${activeIndex === index ? 'bg-gray-200 font-nunito text-[#D783AB] text-3xl' : 'bg-white font-montserrat text-3xl'} transition-colors duration-200`}
            >
              {dropdown.title}
            </button>
            {activeIndex === index && (
              <p className="p-4 font-montserrat  text-2xl">{dropdown.content}</p>
            )}
          </div>
        ))}
      </div>
      <div className=" lg:w-1/2 bg-[#F18C8C] w-[44rem] h-[48rem] rounded-lg p-3 m-4">
        <img src={dropdowns[activeIndex].image} alt={dropdowns[activeIndex].title} className="w-auto h-96 p-6 rounded-lg" />
      </div>
    
    </div>
    <div class="flex justify-center items-center m-7">
  <button class="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 rounded-full text-white">View all features</button>
</div>
</>
  );
};

export default Dropdown;
