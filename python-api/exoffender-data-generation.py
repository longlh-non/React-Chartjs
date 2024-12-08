import pandas as pd
import random
from faker import Faker

# Initialize Faker
fake = Faker()

offense_categories = {
    "short_term": [
        "vandalism",
        "public_intoxication",
        "trespassing",
        "disorderly_conduct",
        "shoplifting",
        "animal_cruelty"
    ],
    "medium_term": [
        "domestic_violence",
        "identity_theft",
        "burglary",
        "motor_vehicle_theft",
        "illegal_weapons_possession",
        "credit_card_fraud",
        "stalking",
        "bribery",
        "embezzlement"
    ],
    "long_term": [
        "cybercrime",
        "white_collar_crime",
        "arson",
        "drug_trafficking",
        "money_laundering",
        "tax_evasion",
        "human_trafficking",
        "hate_crime",
        "child_endangerment",
        "counterfeiting"
    ]
}

# Helper functions for generating random data
def random_choice(options):
    return random.choice(options)

def generate_random_data(num_rows):
    data = []
    
    for _ in range(num_rows):
        offense_type = random_choice(["domestic_violence",
                                            "cybercrime",
                                            "vandalism",
                                            "public_intoxication",
                                            "white_collar_crime",
                                            "identity_theft",
                                            "burglary",
                                            "motor_vehicle_theft",
                                            "arson",
                                            "drug_trafficking",
                                            "prostitution",
                                            "illegal_weapons_possession",
                                            "money_laundering",
                                            "tax_evasion",
                                            "human_trafficking",
                                            "trespassing",
                                            "disorderly_conduct",
                                            "shoplifting",
                                            "credit_card_fraud",
                                            "hate_crime",
                                            "child_endangerment",
                                            "animal_cruelty",
                                            "counterfeiting",
                                            "stalking",
                                            "bribery",
                                            "embezzlement"])
        if offense_type in offense_categories["short_term"]:
            sentence_duration_years = random.randint(1, 2)
        elif offense_type in offense_categories["medium_term"]:
            sentence_duration_years = random.randint(3, 10)
        else:
            sentence_duration_years = random.randint(11, 15)

        support_program_enrolled = random_choice(["job_readiness_program",
                                                    "addiction_recovery_program",
                                                    "financial_literacy_program",
                                                    "anger_management_program",
                                                    "entrepreneurship_program",
                                                    "mental_health_counseling_program",
                                                    "vocational_training_program",
                                                    "computer_skills_training"
                                                    "parenting_skills_workshop",
                                                    "time_management_training"
                                                    "substance_abuse_treatment"
                                                    "conflict_resolution_program"
                                                    "financial_planning_workshop"
                                                    "literacy_and_numeracy_training"
                                                    "life_skills_development_program"
                                                    "community_service_engagement"
                                                    "peer_support_groups"
                                                    "emotional_wellbeing_workshops"
                                                    "public_speaking_training"
                                                    "resume_and_interview_skills"
                                                    "legal_aid_support_program"
                                                    "physical_fitness_and_wellbeing",
                                                    "none"])
    
        education_level = random_choice(["no_formal_qualification", "gcses", "a_levels", "vocational_ualification", "undergraduate_degree", "postgraduate_degree"])

        skills_certifications = random_choice(["welding_certification", 
                                                "data_entry",
                                                "carpentry_skills",
                                                "communication_skills",
                                                "small_business_basics",
                                                "plumbing_skills",
                                                "electrical_installation",
                                                "customer_service_training",
                                                "it_support_certification",
                                                "catering_and_hospitality",
                                                "forklift_operation",
                                                "retail_management_basics",
                                                "landscaping_and_gardening",
                                                "project_management_basics",
                                                "first_aid_certification",
                                                "health_and_safety_training",
                                                "coding_basics",
                                                "driving_license_commercial",
                                                "none"])
        
        if support_program_enrolled == "none" and skills_certifications == "none":
            employment_status = random_choice(["unemployed", "part_time_employment"])
        elif len(skills_certifications) > 1:
            employment_status = random_choice(["employed", "part_time_employment", "self_employed"])
        else:
            employment_status = random_choice(["employed", "unemployed", "part_time_employment", "self_employed"])
        
        if employment_status == "unemployed":
            housing_status = "family_support"
        elif employment_status == "part_time_employment":
            housing_status = random_choice(["family_support", "shared_housing"])
        else:
            housing_status = random_choice(["stable_housing", "transitional_housing", "family_support", "shared_housing"])

        data.append({
            "id": fake.uuid4(),
            "name": fake.name(),
            "age": random.randint(18, 60),
            "gender": random_choice(["male", "female", "other"]),
            "offense_type": offense_type,
            "sentence_duration_years": sentence_duration_years,
            "release_date": fake.date_between(start_date="-5y", end_date="today"),
            "employment_status": employment_status,
            "support_program_enrolled": support_program_enrolled,
            "housing_status": housing_status,
            "reoffended": random_choice(["yes", "no"]),
            "education_level": education_level,
            "skills_certifications": skills_certifications,
            "counseling_sessions_attended": random.randint(0, 20)
        })
    return data

# Generate dataset
num_rows = 2000
dataset = generate_random_data(num_rows)

# Convert to DataFrame
df = pd.DataFrame(dataset)

# Save to CSV
file_path = "./data/ex_offender_rehabilitation_dataset.csv"
df.to_csv(file_path, index=False)
file_path