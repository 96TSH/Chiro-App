import React from "react";
import {
  Container,
  Typography,
  Box,
  CssBaseline,
  TableContainer,
  TableBody,
  TableCell,
  tableCellClasses,
  Table,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import lowerbackpain from "../../images/lowerbackpain.png";
import neckpain from "../../images/neckpain.jpg";
import scoliosis from "../../images/scoliosis.jpg";
import shoulderpain from "../../images/shoulderpain.jpg";
import slippeddisc from "../../images/slippeddisc.jpg";

const TypesOfConditions = () => {
  const conditions = [
    {
      name: "Lower Back Pain",
      image: lowerbackpain,
      causes: [
        "Muscle or ligament strains",
        "Bulging or ruptured discs",
        "Arthritis",
        "Skeletal irregularities",
      ],
      symptoms: [
        "Constant pain with no significant relief when resting",
        "Aggravated by bending in all directions",
        "Localisable severe pain to a single spot on the back",
        "Progressively severe pain over days/weeks",
      ],
    },
    {
      name: "Neck Pain",
      image: neckpain,
      causes: [
        "Text neck syndrome",
        "Improper sleeping posture",
        "Bad posture habits or poor ergonomics",
      ],
      symptoms: [
        "Electric-like or stabbing pain",
        "Pain radiates down to arm when extending or twisting neck",
        "Pain persists at rest",
      ],
    },
    {
      name: "Shoulder Pain",
      image: shoulderpain,
      causes: ["Rotator cuff injury", "Frozen shoulder", "Dislocated shoulder"],
      symptoms: [
        "Pain is dulling and aching",
        "Pain radiates into the upper arm but not past the elbow",
        "Pain persists at night",
      ],
    },
    {
      name: "Slipped Disc",
      image: slippeddisc,
      causes: [
        "Inappropriate lifting",
        "Poor resting posture",
        "Sudden or jerky movement, particularly during sports",
      ],
      symptoms: [
        "Mild to sharp pain in the neck, shoulders or lower back",
        "Numbness, tingling or weakness in one arm or hand (slipped disc in the neck)",
        "Numbness, tingling or weakness in legs, feet or buttocks (slipped disc in the back)",
      ],
    },
    {
      name: "Scoliosis",
      image: scoliosis,
      causes: [
        "Cogenital or born with an abnormal curvature",
        "Birth trauma",
        "Bad posture habits or poor ergonomics",
      ],
      symptoms: [
        "One shoulder blade is higher than the other",
        "Uneven hips",
        "Rotating spine",
        "Problems breathing due to reduced area in the chest for lungs to expand",
      ],
    },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "darkslategray",
      fontSize: 16,
      color: theme.palette.common.white,
      fontFamily: "century gothic",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      color: theme.palette.common.black,
      fontFamily: "Century Gothic",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const styles = {
    paperContainer: {
      backgroundColor: "white",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    typography: {
      fontSize: 16,
      color: "black",
      fontFamily: "Century Gothic",
      padding: 1,
      paddingRight: 30,
    },
  };

  return (
    <Box
      sx={{
        bgcolor: "lightgrey",
        height: "100%",
        width: "100%",
        padding: "5%",
      }}
    >
      <CssBaseline />
      <Paper elevation={5} style={styles.paperContainer}>
        <TableContainer
          sx={{ width: "auto", border: "1px solid lightslategray" }}
        >
          <Table sx={{ width: "auto" }} aria-label="type of conditions">
            <TableHead>
              <TableRow>
                <StyledTableCell width="10%">
                  <b>Type of Condition</b>
                </StyledTableCell>
                <StyledTableCell width="20%">
                  <b>Causes</b>
                </StyledTableCell>
                <StyledTableCell width="30%">
                  <b>Symptoms</b>
                </StyledTableCell>
                <StyledTableCell width="20%">
                  <b>Location of Condition</b>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {conditions.map((condition) => (
                <StyledTableRow key={condition.name}>
                  <StyledTableCell component="th" scope="row">
                    {condition.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {condition.causes &&
                      condition.causes.map((cause) => (
                        <Typography style={styles.typography}>
                          • {cause}
                        </Typography>
                      ))}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {condition.symptoms &&
                      condition.symptoms.map((symptom) => (
                        <Typography style={styles.typography}>
                          • {symptom}
                        </Typography>
                      ))}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <img
                      src={condition.image}
                      alt="error"
                      style={{
                        width: "100%",
                        height: 250,
                        borderRadius: 20,
                      }}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TypesOfConditions;
