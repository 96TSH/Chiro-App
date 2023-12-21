import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";

const FormComponent = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (registrationData) => {
    console.log(registrationData);
    try {
      const response = await fetch(
        `http://localhost:8080/simplewebapp/register?name=${registrationData.name}&phoneNumber=${registrationData.phoneNumber}&email=${registrationData.email}&conditionType=${registrationData.conditionType}&outlet=${registrationData.outlet}&source=${registrationData.source}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log("Registration successfully created:", data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "darkslategray",
          color: "white",
          width: "max",
          py: 1,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Time-Limited Trial Interest Form
        </Typography>
      </Box>
      <Container
        maxWidth="sm"
        sx={{
          mt: 4,
          pb: 2,
          backgroundColor: "white",
          boxShadow: 3,
          borderTop: 1,
          borderBottom: 1,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                // fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                sx={{ width: "48%" }}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                // fullWidth
                label="Phone Number"
                variant="outlined"
                margin="normal"
                sx={{ ml: "4%", width: "48%" }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
              />
            )}
          />
          <Controller
            name="conditionType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Condition Type (eg. Head Pain)"
                variant="outlined"
                margin="normal"
                type="tel"
              />
            )}
          />
          <Controller
            name="outlet"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl sx={{ width: "48%", my: 2 }}>
                <InputLabel id="outletLabel">Outlet</InputLabel>
                <Select
                  {...field}
                  // fullWidth
                  label="Outlet"
                  labelId="outletLabel"
                  variant="outlined"
                  margin="normal"
                >
                  <MenuItem value="Bugis">Bugis</MenuItem>
                  <MenuItem value="Jurong West">Jurong West</MenuItem>
                  <MenuItem value="Bukit Merah">Bukit Merah</MenuItem>
                  <MenuItem value="Macpherson">Macpherson</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="source"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl sx={{ ml: "4%", width: "48%", my: 2 }}>
                <InputLabel id="sourceLabel">Source</InputLabel>
                <Select
                  {...field}
                  // fullWidth
                  label="Source"
                  labelId="sourceLabel"
                  variant="outlined"
                  margin="normal"
                >
                  <MenuItem value="Official Website">Official Website</MenuItem>
                  <MenuItem value="Social Media">Social Media</MenuItem>
                  <MenuItem value="Word Of Mouth">Word Of Mouth</MenuItem>
                  <MenuItem value="Online Reviews">Online Reviews</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Book Your Trial Now!
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default FormComponent;
