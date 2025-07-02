const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to enable cross-origin requests and JSON parsing
app.use(cors());
app.use(bodyParser.json());  // Middleware to parse JSON bodies

// Mock patient data (same as before)

const patients = {
  "12345": {
    name: "Akash Roy",
    age: 35,
    gender: "Male",
    dob: "1988-01-15",
    contact_info: {
      phone: "9876543210",
      email: "akash.roy@example.com"
    },
    address: "123 Park Street, Kolkata, India",
    emergency_contact: {
        name: "Rahul Roy",
        relation: "Brother",
        phone: "9876501234"
    },
    preferred_hospital: "Apollo Hospital, Kolkata",
    insurance_details: {
        provider: "ICICI Lombard",
        policy_number: "ICICI123456789",
        coverage: "₹10,00,000"
    },
    medical_history: ["Hypertension", "Diabetes"],
    hospital_admission_history: "None",
    last_lab_results: {
      blood_pressure: "120/80",
      sugar_level: "120",
      cholesterol: "180"
    }
  },
  "22345": {
    name: "Prapti Mukherjee",
    age: 25,
    gender: "Female",
    dob: "1999-05-21",
    contact_info: {
        phone: "9876549870",
        email: "prapti.mukherjee@example.com"
    },
    address: "456 Lake View Road, Kolkata, India",
    emergency_contact: {
        name: "Soma Mukherjee",
        relation: "Mother",
        phone: "9876512345"
    },
    preferred_hospital: "Fortis Hospital, Kolkata",
    insurance_details: {
        provider: "HDFC Ergo",
        policy_number: "HDFC123456789",
        coverage: "₹8,00,000"
    },
    medical_history: ["Dengue", "Typhoid"],
    hospital_admission_history: "Once",
    last_lab_results: {
      blood_pressure: "110/70",
      sugar_level: "70",
      cholesterol: "160"
    }
  },
  "33345": {
    name: "Sneha Dey",
    age: 18,
    gender: "Female",
    dob: "2006-03-12",
    contact_info: {
        phone: "9876587634",
        email: "sneha.dey@example.com"
    },
    address: "789 Greenfield Lane, Kolkata, India",
    emergency_contact: {
        name: "Sunita Dey",
        relation: "Mother",
        phone: "9876532109"
    },
    preferred_hospital: "Belle Vue Clinic, Kolkata",
    insurance_details: {
        provider: "Bajaj Allianz",
        policy_number: "BAJAJ123456789",
        coverage: "₹5,00,000"
    },
    medical_history: ["Pneumonia", "Diabetes", "Migraine"],
    hospital_admission_history: "Twice",
    surgeries: [],
    last_lab_results: {
        blood_pressure: "100/80",
        sugar_level: "110",
        cholesterol: "180"
    }
  },

  "44445": {
    name: "Priyam Dutta",
    age: 50,
    gender: "Male",
    dob: "1974-07-10",
    contact_info: {
        phone: "9876543200",
        email: "priyam.dutta@example.com"
    },
    address: "123 Sunrise Boulevard, Kolkata, India",
    emergency_contact: {
        name: "Anirban Dutta",
        relation: "Son",
        phone: "9876509876"
    },
    preferred_hospital: "AMRI Hospital, Kolkata",
    insurance_details: {
        provider: "New India Assurance",
        policy_number: "NIA123456789",
        coverage: "₹15,00,000"
    },
    medical_history: ["Hypertension", "Jaundice"],
    hospital_admission_history: "Thrice",
    surgeries: ["Gallbladder Removal"],
    last_lab_results: {
        blood_pressure: "120/80",
        sugar_level: "73",
        cholesterol: "185"
    }
  },

  "55555": {
    name: "Shadaf Anjum",
    age: 30,
    gender: "Female",
    dob: "1994-11-20",
    contact_info: {
        phone: "9876548765",
        email: "shadaf.anjum@example.com"
    },
    address: "654 Sunshine Drive, Kolkata, India",
    emergency_contact: {
        name: "Ayesha Anjum",
        relation: "Sister",
        phone: "9876502345"
    },
    preferred_hospital: "Columbia Asia Hospital, Kolkata",
    insurance_details: {
        provider: "TATA AIG",
        policy_number: "TATA123456789",
        coverage: "₹7,00,000"
    },
    medical_history: ["Diphtheria"],
    hospital_admission_history: "Five Times",
    surgeries: [],
    last_lab_results: {
        blood_pressure: "112/78",
        sugar_level: "90",
        cholesterol: "168"
    }
  },

  "67891": {
    name: "Arya Das",
    age: 20,
    gender: "Male",
    dob: "2004-08-05",
    contact_info: {
        phone: "9876547654",
        email: "arya.das@example.com"
    },
    address: "321 Ocean View, Kolkata, India",
    emergency_contact: {
        name: "Aniket Das",
        relation: "Father",
        phone: "9876511122"
    },
    preferred_hospital: "Woodlands Multispeciality Hospital, Kolkata",
    insurance_details: {
        provider: "Reliance Health",
        policy_number: "REL123456789",
        coverage: "₹6,00,000"
    },
    medical_history: ["Malaria", "Common Cold"],
    hospital_admission_history: "Twice",
    surgeries: [],
    last_lab_results: {
        blood_pressure: "120/80",
        sugar_level: "90",
        cholesterol: "180"
    }
 },
  "66789": {
    name: "Rahul Das ",
    age: 55,
    gender: "Male",
    dob: "1969-02-14",
    contact_info: {
      phone: "9876543210",
      email: "rahul.das@example.com"
    },
    address: "123 Park Street, Kolkata, India",
    emergency_contact: {
      name: "Ananya Das",
      relation: "Wife",
      phone: "9876509876"
    },
    preferred_hospital: "Apollo Hospital, Kolkata",
    insurance_details: {
      provider: "ICICI Lombard",
      policy_number: "ICICI123456789",
      coverage: "₹10,00,000"
    },
    medical_history: ["Liver Cancer"],
    hospital_admission_history: "Once",
    last_lab_results: {
      blood_pressure: "130/90",
      sugar_level: "120",
      cholesterol: "168"
    }
  },
  "77789": {
    name: "Shreyanka Sahoo",
    age: 25,
    gender: "Female",
    dob: "1999-08-10",
    contact_info: {
      phone: "9876548765",
      email: "shreyanka.sahoo@example.com"
    },
    address: "456 Rosewood Lane, Bhubaneswar, India",
    emergency_contact: {
      name: "Rohan Sahoo",
      relation: "Brother",
      phone: "9876504321"
    },
    preferred_hospital: "AIIMS Bhubaneswar",
    insurance_details: {
      provider: "Star Health",
      policy_number: "STAR123456789",
      coverage: "₹5,00,000"
    },
    medical_history: ["Ascarisis"],
    hospital_admission_history: "Twice",
    last_lab_results: {
      blood_pressure: "123/80",
      sugar_level: "90",
      cholesterol: "180"
    }
  },
  "88889": {
    name: "Arghadip Mishra",
    age: 85,
    gender: "Male",
    dob: "1939-05-25",
    contact_info: {
      phone: "9876598765",
      email: "arghadip.mishra@example.com"
    },
    address: "789 Lake View Road, Cuttack, India",
    emergency_contact: {
      name: "Sanjana Mishra",
      relation: "Daughter",
      phone: "9876512345"
    },
    preferred_hospital: "Sunshine Hospital, Cuttack",
    insurance_details: {
      provider: "New India Assurance",
      policy_number: "NIA123456789",
      coverage: "₹8,00,000"
    },
    medical_history: ["Diabetes", "Cholera", "Dengue Fever", "Liver Infection"],
    hospital_admission_history: "Thrice",
    last_lab_results: {
      blood_pressure: "117/80",
      sugar_level: "124",
      cholesterol: "180"
    }
  },
  "99999": {
    name: "Poonam Banerjee",
    age: 40,
    gender: "Female",
    dob: "1984-03-15",
    contact_info: {
      phone: "9876532109",
      email: "poonam.banerjee@example.com"
    },
    address: "321 Sunset Boulevard, Siliguri, India",
    emergency_contact: {
      name: "Ankit Banerjee",
      relation: "Husband",
      phone: "9876508765"
    },
    preferred_hospital: "Fortis Hospital, Siliguri",
    insurance_details: {
      provider: "Max Bupa",
      policy_number: "MAX123456789",
      coverage: "₹9,00,000"
    },
    medical_history: ["AIDS", "Hypertension"],
    hospital_admission_history: "Once",
    last_lab_results: {
      blood_pressure: "119/90",
      sugar_level: "90",
      cholesterol: "180"
    }
  }


  // Add other patient data here...
};

// Endpoint to fetch patient details
app.get('/api/patient/:abhaId', (req, res) => {
  const { abhaId } = req.params;
  console.log(`Received request for ABHA ID: ${abhaId}`); // Log the ABHA ID
  const patient = patients[abhaId];
  if (patient) {
    console.log("Returning patient data:", patient); // Log the patient data being sent
    res.json(patient);
  } else {
    console.log("Patient not found for ABHA ID:", abhaId); // Log if patient not found
    res.status(404).send("Patient not found");
  }
});

// Step 1: Define symptom severity weights
const severityWeights = {
  Emergency: 5,
  Moderate: 3,
  Mild: 1
};

// Lists of symptoms (same as before)
const emergencySymptoms = ["Chest Pain", "Severe Headache", "Severe Bleeding", "Shortness of Breath", "Unconscious", 
                           "Stroke Symptoms", "Seizures", "Severe Allergic Reactions", "Poisoning", "Severe Abdominal Pain", 
                           "Traumatic Injuries","Chest pain", "Severe headache", "Severe bleeding", "Shortness of breath", "Unconscious", 
                           "Stroke symptoms", "Seizures", "Severe allergic reactions", "Poisoning", "Severe abdominal pain", 
                           "Traumatic injuries","chest pain", "severe headache", "severe bleeding", "shortness of breath", "unconscious", 
                           "stroke symptoms", "seizures", "severe allergic reactions", "poisoning", "severe abdominal pain", 
                           "traumatic injuries", "Buke betha", "Tibro matha betha",  "Tibro rokto pora",  "Shash fela kothin", "Behush", 
                          "Stroke-er lakshan", "Kepan", "Tibro allergy pratikriya",  "Bishakto hawa", "Tibro pet betha", "Trauma jonito chot",
                          "Sine mein dard","Tez sar dard","Bhaari rakt sraav", "Saans lene mein takleef","Behosh","Strouk ke lakshan", "Mirgi ka daura",
                          "Tez allergy pratikriya","Vishakranti", "Bhaari pet dard", "Gambhir chot", "Buke Betha", "Tibro Matha betha",  "Tibro Rokto pora",
                          "Shash Fela kothin", "Behush","Stroke-er Lakshan", "Kepan", "Tibro Allergy pratikriya",  "Bishakto Hawa", "Tibro Pet betha", 
                          "Trauma Jonito chot","Sine Mein dard","Tez Sar dard","Bhaari Rakt sraav", "Saans Lene mein takleef","Behosh","Strouk Ke lakshan", 
                          "Mirgi Ka daura","Tez Allergy pratikriya","Vishakranti", "Bhaari Pet dard", "Gambhir Chot","Chest Pain.", "Severe Headache.", "Severe Bleeding.","Shortness of Breath.", "Unconscious.", 
                           "Stroke Symptoms.", "Seizures.", "Severe Allergic Reactions.", "Poisoning.", "Severe Abdominal Pain.", 
                           "Traumatic Injuries.","Chest pain.", "Severe headache.", "Severe bleeding.", "Shortness of breath.", "Unconscious.", 
                           "Stroke symptoms.", "Seizures.", "Severe allergic reactions.", "Poisoning.", "Severe abdominal pain.", 
                           "Traumatic injuries.","chest pain.", "severe headache.", "severe bleeding.", "shortness of breath.", "unconscious.", 
                           "stroke symptoms.", "seizures.", "severe allergic reactions.", "poisoning.", "severe abdominal pain.", 
                           "traumatic injuries.", "Buke betha.", "Tibro matha betha.",  "Tibro rokto pora.",  "Shash fela kothin.", "Behush.", 
                          "Stroke-er lakshan.", "Kepan.", "Tibro allergy pratikriya.",  "Bishakto hawa.", "Tibro pet betha.", "Trauma jonito chot.",
                          "Sine mein dard.","Tez sar dard.","Bhaari rakt sraav.", "Saans lene mein takleef.","Behosh.","Strouk ke lakshan.", "Mirgi ka daura.",
                          "Tez allergy pratikriya.","Vishakranti.", "Bhaari pet dard.", "Gambhir chot.", "Buke Betha.", "Tibro Matha betha.",  "Tibro Rokto pora.",
                          "Shash Fela kothin.", "Behush.","Stroke-er Lakshan.", "Kepan.", "Tibro Allergy pratikriya.",  "Bishakto Hawa.", "Tibro Pet betha.", 
                          "Trauma Jonito chot.","Sine Mein dard.","Tez Sar dard.","Bhaari Rakt sraav.", "Saans Lene mein takleef.","Behosh.","Strouk Ke lakshan.", 
                          "Mirgi Ka daura.","Tez Allergy pratikriya.","Vishakranti.", "Bhaari Pet dard.", "Gambhir Chot."];

const moderateSymptoms = ["Moderate Headache", "Persistent Cough", "Prolonged Fever", "Kidney Stones", "Moderate Asthma", 
                          "Severe Migraines", "Skin Infections", "Moderate Burns", "Moderate Allergic Reactions", "Fractures",
                          "Moderate headache", "Persistent cough", "Prolonged fever", "Kidney stones", "Moderate asthma", 
                          "Severe migraines", "Skin infections", "Moderate burns", "Moderate allergic reactions", "Fractures",
                          "moderate headache", "persistent cough", "prolonged fever", "kidney stones", "moderate asthma", 
                          "severe migraines", "skin infections", "moderate burns", "moderate allergic reactions", "fractures", 
                          "Motamuti matha betha",  "Nirantor kashi", "Dirgho jor", "Brikko pathor","Motamuti asthma", "Tibro migraine", 
                          "Twok-er sankramon", "Motamuti pora", "Motamuti allergy pratikriya", "Haddi bhanga","Halka sar dard","Lambi samay tak khansi",
                          "Lambi samay tak bukhar","Gurdev pathar"," Halka asthma","Tez sir ka dard","Twacha sankraman","Halka jalan","Halka allergy pratikriya",
                          "Haddi tootna","Motamuti Matha betha",  "Nirantor Kashi", "Dirgho Jor", "Brikko Pathor","Motamuti Asthma", "Tibro Migraine", 
                          "Twok-er Sankramon", "Motamuti Pora", "Motamuti Allergy pratikriya", "Haddi Bhanga","Halka Sar dard","Lambi Samay tak khansi",
                          "Lambi Samay tak bukhar","Gurdev Pathar"," Halka Asthma","Tez Sir ka dard","Twacha Sankraman","Halka Jalan","Halka Allergy pratikriya",
                          "Haddi Tootna","Moderate Headache.", "Persistent Cough.", "Prolonged Fever.", "Kidney Stones.", "Moderate Asthma.", 
                          "Severe Migraines.", "Skin Infections.", "Moderate Burns.", "Moderate Allergic Reactions.", "Fractures.",
                          "Moderate headache.", "Persistent cough.", "Prolonged fever.", "Kidney stones.", "Moderate asthma.", 
                          "Severe migraines.", "Skin infections.", "Moderate burns.", "Moderate allergic reactions.", "Fractures.",
                          "moderate headache.", "persistent cough.", "prolonged fever.", "kidney stones.", "moderate asthma.", 
                          "severe migraines.", "skin infections.", "moderate burns.", "moderate allergic reactions.", "fractures.", 
                          "Motamuti matha betha.",  "Nirantor kashi.", "Dirgho jor.", "Brikko pathor.","Motamuti asthma.", "Tibro migraine.", 
                          "Twok-er sankramon.", "Motamuti pora.", "Motamuti allergy pratikriya.", "Haddi bhanga.","Halka sar dard.","Lambi samay tak khansi.",
                          "Lambi samay tak bukhar.","Gurdev pathar."," Halka asthma.","Tez sir ka dard.","Twacha sankraman.","Halka jalan.","Halka allergy pratikriya.",
                          "Haddi tootna.","Motamuti Matha betha.",  "Nirantor Kashi.", "Dirgho Jor.", "Brikko Pathor.","Motamuti Asthma.", "Tibro Migraine.", 
                          "Twok-er Sankramon.", "Motamuti Pora.", "Motamuti Allergy pratikriya.", "Haddi Bhanga.","Halka Sar dard.","Lambi Samay tak khansi.",
                          "Lambi Samay tak bukhar.","Gurdev Pathar."," Halka Asthma.","Tez Sir ka dard.","Twacha Sankraman.","Halka Jalan","Halka Allergy pratikriya.",
                          "Haddi Tootna."];

const mildSymptoms = ["Fatigue", "Mild Cough", "Slight Fever", "Common Cold", "Minor Cuts and Bruises", "Mild Allergies", 
                      "Minor Burns", "Mild Asthma", "Digestive Issues", "Sprains and Strains", "Back Pain","Fatigue", "Mild cough",
                      "Slight fever", "Common cold", "Minor cuts and bruises", "Mild allergies", 
                      "Minor burns", "Mild asthma", "Digestive issues", "Sprains and strains", "Back pain","fatigue", "mild cough",
                      "slight fever", "common cold", "minor cuts and bruises", "mild allergies", 
                      "minor burns", "mild asthma", "digestive issues", "sprains and strains", "back pain",  "Klanto", "Halka kashi", 
                      "Halka kashi", "Sadharan thanda", "Choto kata chape", "Halka allergy",  "Choto pora", "Halka asthma",  "Pachon shomoshya", "Moch o tan", "Komor betha",
                      "Thakan","Halki khansi","Halka bukhar","Sadharan sardi","Chhoti chot aur ghaav","Halki allergy","Chhoti jalan","Halka asthma","Pachan sambandhi samasya",
                      "Moch aur tanav","Peeth dard", "Klanto", "Halka Kashi","Halka Kashi", "Sadharan Thanda", "Choto Kata chape", "Halka Allergy","Choto Pora", "Halka Asthma",
                      "Pachon Shomoshya", "Moch O tan", "Komor Betha","Thakan","Halki Khansi","Halka Bukhar","Sadharan Sardi","Chhoti Chot aur ghaav","Halki Allergy","Chhoti Jalan",
                      "Halka Asthma","Pachan Sambandhi samasya","Moch Aur tanav","Peeth Dard","Fatigue.", "Mild Cough.", "Slight Fever.", "Common Cold.", "Minor Cuts and Bruises.", "Mild Allergies.", 
                      "Minor Burns.", "Mild Asthma.", "Digestive Issues.", "Sprains and Strains.", "Back Pain.","Fatigue.", "Mild cough.",
                      "Slight fever.", "Common cold.", "Minor cuts and bruises.", "Mild allergies.", 
                      "Minor burns.", "Mild asthma.", "Digestive issues.", "Sprains and strains.", "Back pain.","fatigue.", "mild cough.",
                      "slight fever.", "common cold.", "minor cuts and bruises.", "mild allergies.", 
                      "minor burns.", "mild asthma.", "digestive issues.", "sprains and strains.", "back pain.",  "Klanto.", "Halka kashi.", 
                      "Halka kashi.", "Sadharan thanda.", "Choto kata chape.", "Halka allergy.",  "Choto pora.", "Halka asthma.",  "Pachon shomoshya.", "Moch o tan.", "Komor betha.",
                      "Thakan.","Halki khansi.","Halka bukhar.","Sadharan sardi.","Chhoti chot aur ghaav.","Halki allergy.","Chhoti jalan.","Halka asthma.","Pachan sambandhi samasya.",
                      "Moch aur tanav.","Peeth dard.", "Klanto.", "Halka Kashi.","Halka Kashi.", "Sadharan Thanda.", "Choto Kata chape.", "Halka Allergy.","Choto Pora.", "Halka Asthma.",
                      "Pachon Shomoshya.", "Moch O tan.", "Komor Betha.","Thakan.","Halki Khansi.","Halka Bukhar.","Sadharan Sardi.","Chhoti Chot aur ghaav.","Halki Allergy.","Chhoti Jalan.",
                      "Halka Asthma.","Pachan Sambandhi samasya.","Moch Aur tanav.","Peeth Dard."];

// Step 2: Priority Calculation Logic
function calculatePriority(symptoms) {
  let totalScore = 0;
  let emergencyFlag = false;

  // Check for emergency symptoms
  for (let symptom of symptoms) {
    if (emergencySymptoms.includes(symptom)) {
      totalScore += severityWeights.Emergency;
      emergencyFlag = true;
      break; // Once an emergency symptom is found, no need to check further
    }
  }

  if (emergencyFlag) return "Emergency";  // Emergency symptom found

  // Count moderate symptoms
  let moderateCount = 0;
  for (let symptom of symptoms) {
    if (moderateSymptoms.includes(symptom)) {
      moderateCount += 1;
      totalScore += severityWeights.Moderate;
    }
  }

  // Two or more moderate symptoms = Emergency priority
  if (moderateCount >= 2) return "Emergency";
  if (moderateCount === 1) return "Moderate";  // One moderate symptom

  // Count mild symptoms
  let mildCount = 0;
  for (let symptom of symptoms) {
    if (mildSymptoms.includes(symptom)) {
      mildCount += 1;
      totalScore += severityWeights.Mild;
    }
  }

  // Only mild symptoms = Mild priority
  if (mildCount > 0) return "Mild";

  // Default case if no symptoms match
  return "No Symptoms";
}

// Endpoint to handle priority calculation
app.post('/getPriority', (req, res) => {
  const symptoms = req.body.symptoms;
  console.log("Received symptoms:", symptoms); // Log the symptoms for debugging

  if (!Array.isArray(symptoms)) {
    return res.status(400).send("Symptom data must be an array.");
  }

  const priority = calculatePriority(symptoms);
  res.json({ priority });
});

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
