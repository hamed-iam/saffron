import CountUp from 'react-countup';

const SanaArz = ({ data: { title, p } }) => {
  return (
    <ul>
      <li>
        {title} - <CountUp start={0} end={p} duration={1} separator="," />
      </li>
    </ul>
  );
};

export default SanaArz;
