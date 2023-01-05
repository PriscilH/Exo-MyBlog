const Items = (props) => {
   return ( 
        
    <div className="item">
        <h3>{props.title === "" ? "Sans titre" : props.title}</h3>
        <span className="subtitle">{props.subtitle}</span>
        <div className="picture"></div>
        <span>{props.description}</span>  
    </div>
    
    );
}

export default Items;