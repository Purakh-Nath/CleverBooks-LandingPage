
import React, { useState } from 'react';

const testimonialData = [
  {
    header: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. CleverBooks automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see CleverBooks unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
    person: {
      name: "Diksha Pande",
      position: "Co-founder",
      company: "Samosa Party",
      personImage: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp"
    },
    images: {
      smallImage: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg",
      bigImage: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp"
    },
    stats: {
      demandFulfilment: "up to 95%",
      dailyStockOut: "< 3%"
    },
    other: {
      demand: "Demand Fulfilment",
      daily: "Daily Stock-out",
    }
  },
  {
    header: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented CleverBooks I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
    person: {
      name: "Kirti Goel",
      position: "Co-founder",
      company: "P-TAL",
      personImage: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg"
    },
    images: {
      smallImage: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg",
      bigImage: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal.webp"
    },
    stats: {
      demandFulfilment: "Automated Invoice Reconciliation",
      dailyStockOut: "Channel wise Sales Classification"
    }
  }
  // Add more testimonials as needed
];

const ReviewsSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonialData[currentTestimonialIndex];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50">
      <div className=" p-6 bg-white  rounded-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <p className="text-gray-800 text-lg mb-4">{currentTestimonial.header}</p>
          <div className="flex items-center mt-4">
            <img
              src={currentTestimonial.person.personImage}
              alt={currentTestimonial.person.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <p className="text-gray-800 font-semibold">{currentTestimonial.person.name}</p>
              <p className="text-gray-600">{currentTestimonial.person.position}, {currentTestimonial.person.company}</p>
            </div> 
           
            <div className="flex mt-6 space-x-4 mb-6">  <br />  <br />
        <button
          onClick={handlePrevious}
          className="text-purple-700 bg-white border border-purple-700 rounded-full p-2 hover:bg-purple-700 hover:text-white"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="text-purple-700 bg-white border border-purple-700 rounded-full p-2 hover:bg-purple-700 hover:text-white"
        >
          &gt;
        </button>
      </div>
          </div>
          <div className="flex mt-6 gap-3">
            <div className="w-1/2 text-center bg-[#F1E9FC] rounded-xl p-6">
              <p className="text-3xl text-purple-800 font-bold ">{currentTestimonial.stats.demandFulfilment}</p>
              <p className="text-gray-600">{currentTestimonial.other?.demand}</p>
            </div>
            <div className="w-1/2 text-center bg-[#F1E9FC] rounded-xl p-6">
              <p className="text-3xl text-purple-800 font-bold">{currentTestimonial.stats.dailyStockOut}</p>
              <p className="text-gray-600">{currentTestimonial.other?.daily}</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 p-4 flex flex-col items-center">
          <img
            src={currentTestimonial.images.smallImage}
            alt={`${currentTestimonial.person.company} Logo`}
            className="w-12 h-12 mb-4"
          />
          <img
            src={currentTestimonial.images.bigImage}
            alt={`${currentTestimonial.person.company}`}
            className="w-[100%] max-w-[100%] object-cover h-96 rounded-lg shadow-lg  border border-green-400"
          />
        </div>
      </div>
     
    </div>
  );
};

export default ReviewsSection;
