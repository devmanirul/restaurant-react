/* eslint-disable react/prop-types */
const GalaryCard = ({img, className}) => {
  return <div className={className}><img src={img} alt="" className="w-full h-full object-cover" /></div>;
};
export default GalaryCard;
