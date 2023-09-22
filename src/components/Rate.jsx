import '../components/Rate.css';

const Rate = (props)  => {

        const {id, name, url, speed, traffic, selectedId, onClick} = props;
        
        return (
            //добавили по клику изменение тарифа (пока только текст)
        <section className={"rate"} id={id} onClick={()=>{onClick(id)}} selectedId={selectedId}>
        <h2 className="rate-name">{name}</h2>
        <img className="rate-price" src={url} alt={name}></img>
        <p className="rate-speed">{speed}</p>
        <p className="rate-traffic">{traffic}</p>
        <p className="rate-choose">{selectedId === id ? 'Тариф выбран' : 'Тариф не выбран'}</p>
        </section>
        );
        };

export default Rate;

//{this.state.pressed ? "Тариф выбран" : "Тариф не выбран"}