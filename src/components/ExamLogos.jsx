import exam1 from "../assets/images/exam-1.png";
import exam2 from "../assets/images/exam-2.png";
import exam3 from "../assets/images/exam-3.png";
import exam4 from "../assets/images/exam-4.png";

const ExamLogos = () => {
    const examLogos = [exam1, exam2, exam3, exam4];

    return (
        <div className="ExamLogos">
            {examLogos.map((item) => (
                <img src={item} />
            ))}
        </div>
    );
};

export default ExamLogos;
