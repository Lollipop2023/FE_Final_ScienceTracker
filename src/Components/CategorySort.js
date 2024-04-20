// import React from 'react';
// import ExperimentCard from './ExperimentCard';

// const CategorySort = ({ experiments }) => {
//     // Group experiments by category or difficulty in carousels is the goal. Be nice if I could see it!
//     const groupedExperiments = experiments.reduce((acc, experiment) => {
//         const category = experiment.category.toLowerCase();
//         if (!acc[category]) {
//             acc[category] = [];
//         }
//         acc[category].push(experiment);
//         return acc;
//     }, {});

//     return (
//         <div className="container">
//             <h2>Experiment Categories</h2>
//             <hr />
//             {Object.keys(groupedExperiments).map((category, index) => (
//                 <div key={index} className="mb-4">
//                     <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
//                     <div className="row">
//                         {groupedExperiments[category].map(experiment => (
//                             <div key={experiment.id} className="col-md-4">
//                                 <ExperimentCard experiment={experiment} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CategorySort;
