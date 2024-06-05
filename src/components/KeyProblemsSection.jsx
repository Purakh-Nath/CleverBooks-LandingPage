import React from 'react';
// import './styles.css'; // Import your Tailwind CSS styles

const problems = [
  {
    id: 1,
    imgSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg',
    title: 'What to order',
    desc: 'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
  },
  {
    id: 2,
    imgSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg',
    title: 'What to order',
    desc: 'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
  },
  {
    id: 3,
    imgSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg',
    title: 'What to order',
    desc: 'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
  },
  {
    id: 4,
    imgSrc: 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg',
    title: 'What to order',
    desc: 'Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.',
  },

  // Add more problem objects here
];

const KeyProblemsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-lato text-center mb-8 text-black font-bold">Four key questions answered by CleverBooks</h2>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {problems.map((problem) => (
            <li key={problem.id} className="p-4 rounded-xl shadow-md bg-[#F1E9FC] h-72">
              <div className="flex items-center mb-2">
                <img
                  src={problem.imgSrc}
                  alt={problem.title}
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-lg font-medium">{problem.title}</h3>
              </div>
              <p className="text-gray-700">{problem.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KeyProblemsSection;

