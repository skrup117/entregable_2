const WeatherStat = ({icon, value, unit}) => {
    return (
        <div className="flex gap-1 items-center h-18 w-auto">
            <img className = "w-8 h-8" src={icon} alt="" />
            <span>{value}{unit}</span>
        </div>
    );
};
export default WeatherStat;