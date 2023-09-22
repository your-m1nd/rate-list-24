import '../components/Rate.css';

const Rate = (props)  => {

        const {id, name, url, speed, traffic, selectedId, onClick, isSelected} = props;
        
        return (
        <section className={selectedId === id ? "rate "+ (isSelected?"selected":"") : "rate"} onClick={()=>{onClick(id)}}>
        <h2 className="rate-name">{name}</h2>
        <img className="rate-price" src={url} alt={name}></img>
        <p className="rate-speed">{speed}</p>
        <p className="rate-traffic">{traffic}</p>
        {selectedId === id ? <p className="rate-choose">Тариф выбран</p> : <p className="rate-choose">Выбрать тариф</p>}
        </section>
        );
        };

export default Rate;
