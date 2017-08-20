***things to do

send documents to grid
error catching with mongodb connection
dynamic column size
dynamic row size //doesnt make sense unless we do a char cap?
add restore state button
array for conditions
project input modal
fixed header
moveable columns
search on columns/search on all
dynamic page sizing, row count/pagination
click to expand (change cell template)
expand all/collapse all button
styling
pull auto complete values from mongodb
stop background scrolling
warnings when you are adding a new field
- conditions
- business issues
- therapy
- lifecycle stage
- client
- therapy area
- drug class/product
loading bar for rows
header/footer styling
scrollbar
https?
server research

*inputYear setting off "This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar."
^^resolved itself

*inputConditions error checking, multiple empty fields but data is there? how will this be handled by my emptyCheck()?

oc login https://api.starter-us-west-2.openshift.com
****Don't touch


{
  "Job_number": {},
  "Client": {},
  "Lifecycle_stage": {},
  "Business_issue": {},
  "Therapy_area": {},
  "Project_title": {},
  "Brand": {},
  "Generic_name/formulation": {},
  "Drug_class/Product": {},
  "Situation/problem": {},
  "Condition": {},
  "Markets": {},
  "Type(Qual/quant/ mixed/ consultancy component)": {},
  "Customer_target": {},
  "Brand_Type": {},
  "Year": {},
  "BSc_personnel": {},
  "Key_client_Personnel": {},
  "Research_techniques_used/products": {},
  "Method_and_time_with_resp": {},
  "Sample_size_(n": ")",
  "Total_respondent_face_time_(hours)": {},
  "Total_hours:numeric_value_only_for_easy_tallying": {},
  "Phase": {}
}

{
  "ID": "1",
  "job_number": "1",
  "project_title": "project_title1",
  "project_lead": "project_lead1",
  "client": "client1",
  "region": "1",
  "countries": "countries1",
  "therapy": "therapy1",
  "conditions": ["cond1","cond2"],
  "immunology": "immunology1",
  "number_of_PCPs": "1",
  "number_of_nurses": "1",
  "total_nurse_time": "1h",
  "lost_cancelled": "lost/cancelled1",
  "year": "1111",
  "number_of_patients": "1",
  "total_patient_time": "1",
  "business_issue": "business_issue1"
}
{
  "ID": "2",
  "job_number": "2",
  "project_title": "project_title2",
  "project_lead": "project_lead2",
  "client": "client2",
  "region": "2",
  "countries": "countries2",
  "therapy": "therapy2",
  "conditions": ["cond3","cond4"],
  "immunology": "3",
  "number_of_PCPs": "2",
  "number_of_nurses": "2",
  "total_nurse_time": "2h",
  "lost_cancelled": "lost/cancelled2",
  "year": "2222",
  "number_of_patients": "3",
  "total_patient_time": "2",
  "business_issue": "business_issue2"
}
{
  "ID": "3",
  "job_number": "3",
  "project_title": "project_title3",
  "project_lead": "project_lead3",
  "client": "client3",
  "region": "3",
  "countries": "countries3",
  "therapy": "therapy3",
  "conditions": ["cond1","cond5"],
  "immunology": "immunology3",
  "number_of_PCPs": "3",
  "number_of_nurses": "3",
  "total_nurse_time": "3h",
  "lost_cancelled": "lost/cancelled3",
  "year": "3333",
  "number_of_patients": "3",
  "total_patient_time": "3",
  "business_issue": "business_issue3"
}




****