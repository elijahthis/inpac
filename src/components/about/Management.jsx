import "./styles.scss";
import person1 from "../../assets/images/person-1.png";
import person2 from "../../assets/images/person-2.png";
import person3 from "../../assets/images/person-3.png";
import person4 from "../../assets/images/person-4.png";
import person5 from "../../assets/images/person-5.png";

const Management = () => {
	const managementList = [
		{
			name: "Dcn. Olaniyi-Ojoawo Funmilayo",
			role: "Managing Director",
			img: person1,
		},
		{
			name: "Mr Sangoola Adebamiji Abosede",
			role: "Principal",
			img: person2,
		},
		{
			name: "Mrs Akinjoko Funmilayo funmilola",
			role: "Vice Principal",
			img: person3,
		},
		{
			name: "Mrs Babalola Olabisi Abosede",
			role: "Head MIstress",
			img: person4,
		},
		{ name: "Mrs Soetan", role: "Ass. Head MIstress", img: person5 },
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
