import "./styles.scss";
import facility1 from "../../assets/images/facility-1.png";

const Management = () => {
  const managementList = [
    { name: "DR JAMES DAVID", role: "Managing Director", img: facility1 },
    { name: "DR JAMES DAVID", role: "Managing Director", img: facility1 },
    { name: "DR JAMES DAVID", role: "Managing Director", img: facility1 },
    { name: "DR JAMES DAVID", role: "Managing Director", img: facility1 },
    { name: "DR JAMES DAVID", role: "Managing Director", img: facility1 },
  ];

  return (
    <div className="Management">
      <h2>Our Management</h2>
      <div className="Management__list">
        {managementList.map((item) => (
          <div className="Management__list__item">
            <img src={item.img} alt="" />
            <p className="name">{item.name}</p>
            <p className="role">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
