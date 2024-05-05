import { React, useState } from "react";
import Select from "react-select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const roles = [
  {
    label: "Engineering",
    options: [
      { value: "fullstack", label: "Fullstack" },
      { value: "frontend", label: "Frontend" },
      { value: "backend", label: "Backend" },
      { value: "dev-ops", label: "Dev-Ops" },
      { value: "data science", label: "Data Science" },
      { value: "machine learning", label: "Machine Learning" },
      { value: "android", label: "Android" },
      { value: "ios", label: "iOS" },
      { value: "flutter", label: "Flutter" },
      { value: "react native", label: "React Native" },
      { value: "tech lead", label: "Tech Lead" },
      { value: "engineering manager", label: "Engineering Manager" },
      { value: "QA", label: "QA" },
      { value: "technical writer", label: "Technical Writer" },
      { value: "network", label: "Network" },
      { value: "cloud", label: "Cloud" },
      { value: "NLP", label: "NLP" },
      { value: "Blockchain", label: "Blockchain" },
      { value: "computer-vision", label: "Computer-Vision" },
      { value: "SRE", label: "SRE" },
    ],
  },
  {
    label: "Design",
    options: [
      { value: "Designer", label: "Designer" },
      { value: "Design Manager", label: "Design Manager" },
      { value: "Product Designer", label: "Product Designer" },
      { value: "Graphic Designer", label: "Graphic Designer" },
    ],
  },
  {
    label: "Product",
    options: [{ value: "Product Manager", label: "Product Manager" }],
  },
  {
    label: "Operations",
    options: [
      { value: "Operations Manager", label: "Operations Manager" },
      {
        value: "Founder's Office / Chief of Staff",
        label: "Founder's Office / Chief of Staff",
      },
    ],
  },
];

const experience = [
  //value from 1 to 10
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
  { value: 7, label: "7" },
  { value: 8, label: "8" },
  { value: 9, label: "9" },
  { value: 10, label: "10" },
];

const remote = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "Onsite" },
  { value: "hybrid", label: "Hybrid" },
];

const salary = [
  { value: 10, label: "10L" },
  { value: 20, label: "20L" },
  { value: 30, label: "30L" },
  { value: 40, label: "40L" },
  { value: 50, label: "50L" },
  { value: 60, label: "60L" },
  { value: 70, label: "70L" },
];

const location = [
  { value: "bangalore", label: "Bangalore" },
  { value: "mumbai", label: "Mumbai" },
  { value: "delhi ncr", label: "Delhi" },
  { value: "pune", label: "Pune" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "chennai", label: "Chennai" },
  { value: "india", label: "India" },
];

const Filters = ({ filters, setFilters }) => {
  const [companyName, setCompanyName] = useState("");

  const handleRoleChange = (selectedOptions) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      role: selectedOptions.map((option) => option.value),
    }));
  };

  const handleExperienceChange = (selectedOptions) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      experience: selectedOptions.map((option) => option.value),
    }));
  };

  const handleRemoteChange = (selectedOptions) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      remote: selectedOptions.map((option) => option.value),
    }));
  };

  const handleSalaryChange = (selectedOption) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      salary: selectedOption ? selectedOption.value : null,
    }));
  };

  const handleLocationChange = (selectedOptions) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: selectedOptions.map((option) => option.value),
    }));
  };

  const handleCompanyNameChange = (event) => {
    const { value } = event.target;
    setCompanyName(value);
    // Update company name filter in the state
    setFilters((prevFilters) => ({
      ...prevFilters,
      companyName: value,
    }));
  };

  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      marginTop={2}
    >
      <Grid item xs={12} sm={6} md={2} >
        <Select
          onChange={handleRoleChange}
          options={roles}
          isMulti
          isClearable
          placeholder="Roles"
          sx={{marginLeft:'5px'}}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Select
          onChange={handleExperienceChange}
          options={experience}
          isMulti
          isClearable
          placeholder="Experience"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Select
          onChange={handleRemoteChange}
          options={remote}
          isMulti
          isClearable
          placeholder="Remote/Onsite"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Select
          onChange={handleSalaryChange}
          options={salary}
          isClearable
          placeholder="Minimum Salary"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <Select
          onChange={handleLocationChange}
          options={location}
          isClearable
          isMulti
          placeholder="Location"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2}>
        <TextField
          id="companyName"
          label="Search Company Name"
          variant="outlined"
          size="small"
          value={companyName}
          onChange={handleCompanyNameChange}
        />
      </Grid>
    </Grid>
  );
};

export default Filters;
