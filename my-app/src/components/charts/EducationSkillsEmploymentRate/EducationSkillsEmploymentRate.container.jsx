// EducationEmploymentContainer.js
import { useEffect, useState } from "react";
import EducationSkillsEmploymentRate from "./EducationSkillsEmploymentRate";
import { useSelector } from 'react-redux';

const EducationEmploymentContainer = () => {
    const [chartData, setChartData] = useState([]);
    const { data, loading, error } = useSelector((state) => state.data);

    const calculateEmploymentRateBySkillCount = (peopleData) => {
        const skillCountGroups = {};
    
        peopleData.forEach((person) => {
            const skillCount = JSON.parse(person.skills_certifications.replace(/'/g, '"')).length; // Calculate number of skills
            if (!skillCountGroups[skillCount]) {
                skillCountGroups[skillCount] = { total: 0, employed: 0 };
            }
        
            // Increment totals
            skillCountGroups[skillCount].total += 1;
            if (person.employment_status === "employed" || person.employment_status === "self_employed" || person.employment_status === "part_time_employment") {
                skillCountGroups[skillCount].employed += 1;
            }
        });

        console.log("skillCountGroups", skillCountGroups)
    
        const employmentRateBySkillCount = [];
        Object.keys(skillCountGroups).forEach((skillCount) => {
            const group = skillCountGroups[skillCount];
            const employmentRate = (group.employed / group.total) * 100;
            employmentRateBySkillCount.push({
                skillCount: parseInt(skillCount),
                employmentRate: employmentRate,
            });
        });
    
        return employmentRateBySkillCount;
    };

  useEffect(() => {

    // Run the function to calculate the new data
    const processedData = calculateEmploymentRateBySkillCount(data);
    console.log(processedData)
    // Process the data or fetch from an API if needed
    setChartData(processedData);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <EducationSkillsEmploymentRate data={chartData} />;
};

export default EducationEmploymentContainer;
