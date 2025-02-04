function Total(props) {
  // Enhance reusability by passing array
  const total = props.parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return <p>Number of exercises {total}</p>;
}

export default Total;
