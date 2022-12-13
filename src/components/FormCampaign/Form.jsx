import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  ButtonBase,
} from "@mui/material";
// import date
import MyDatePicker from "../DatePicker/DatePicker";
import FileBase from "react-file-base64";
import TuneIcon from "@mui/icons-material/Tune";
import uploadImg from "../../utils/UploadImgToCloud";
import * as api from "../../apis";
import { useSelector, useDispatch } from "react-redux";
import { CurrencyYuanOutlined } from "@mui/icons-material";
import { createCamp, editCamp } from "../../actions/campaign";
import { PICK_CAMP } from "../../constraint/actionTypes";

import "./styles.scss";

const defaultData = {
  title: "",
  description: "",
  img1_url: "",
  zone: "",
};

export default function Form() {
  const [formData, setFormData] = useState(defaultData);
  const currentId = useSelector((state) => state.campaign.currentId);
  const currentCamp = useSelector((state) =>
    currentId
      ? state.campaign.campaigns.find((camp) => camp.id == currentId)
      : null
  );

  const dispatch = useDispatch();
  const handlePost = async (e) => {
    e.preventDefault();
    formData.img1_url = await uploadImg(formData.img1_url);
    // formData.img2_url = await uploadImg(formData.img2_url);

    if (currentCamp) {
      dispatch(editCamp(formData, currentId));
    } else {
      dispatch(createCamp(formData));
    }

    // const res = api.createCamp(formData);
    setFormData(defaultData);
  };

  useEffect(() => {
    if (currentCamp) {
      setFormData(currentCamp);
    }
  }, [currentId]);

  const [open, setOpen] = React.useState(false);

  return (
    <Card className="formEditCampaign">
      <Box className="formEditCampaign__container">
        <Box className="titleContainer">
          <Box className="editCampaign_title">
            <TuneIcon />
            <Typography variant="h6" fontWeight={700}>
              {currentCamp ? "Edit Campaign" : "New Campaign"}
            </Typography>
          </Box>
          <Divider />
        </Box>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          value={formData.title}
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
          margin="normal"
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          value={formData.description}
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
          margin="normal"
          multiline
          rows={5}
        />
        <Box className="uploadImg_container">
          <FileBase
            className="uploadImg"
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, img1_url: base64 })
            }
          />
        </Box>
        {/* <Box className="uploadImg_container">
          <FileBase
            className="uploadImg"
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setFormData({ ...formData, img2_url: base64 })
            }
          />
        </Box> */}

        <TextField
          name="zone"
          variant="outlined"
          label="Zone"
          value={formData.zone}
          fullWidth
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          onClick={handlePost}
          sx={{ marginBottom: "8px" }}
        >
          Submit
        </Button>
        {currentCamp && (
          <Button
            variant="outlined"
            size="large"
            type="submit"
            onClick={() => {
              dispatch({ type: PICK_CAMP, payload: "" });
              setFormData(defaultData);
            }}
          >
            Cancel
          </Button>
        )}
      </Box>
    </Card>
  );
}
