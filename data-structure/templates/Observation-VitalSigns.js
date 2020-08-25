{
  
  // The type of resource
  "resourceType" : "Observation",
  
  // The status of the observation
  "status": "final",
  
  // Time of the observation
  "effectiveDateTime": "YYYY-MM-DDThh:mm:ss+zz:zz",
  
  // Patient associated with the observation
  "subject": {
    "reference": "Patient/3294843"
  },
  
  // Clinical episode associated with the observation
  "encounter": {
    "reference": "Encounter/2314234"
  },
  
  // LOINC code for the observation that was made
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "8480-6",
        "display": "Systolic blood pressure"
      }
    ],
    "text": "Systolic blood pressure"
  },
  
  // SNOMED code for the body site used 
  "bodySite": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "368209003",
        "display": "Right arm"
      }
    ]
  },
  
  // Value and units of measure
  "valueQuantity": {
    "value": 107,
    "unit": "mmHg",
    "system": "http://unitsofmeasure.org",
    "code": "mm[Hg]"
  }
}