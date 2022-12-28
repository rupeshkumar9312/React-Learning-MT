import { Link, useParams } from 'react-router-dom';

const ImageComponent = (props) => {
  const { dataId } = useParams();

  console.log(props)
  const product = props.data.find((data) => data.id === dataId); 
  const { image, name } = product;
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      
    </section>
  );
};

export default ImageComponent;