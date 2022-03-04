import React from "react";
import "./editor.css";
import ReactQuill from "react-quill";
import { makeStyles } from "@material-ui/core";
import Editor_Format, { modules, formats } from "../../utils/Editor_Format";
import "react-quill/dist/quill.snow.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  titleInputWrapper: {
    marginBottom: "1rem",
  },
  titleInput: {
    outline: "none",
    width: "100%",
    padding: "0.8rem 1rem",
    marginTop: "1rem",
    fontSize: "1rem",
    fontFamily: "inherit",
  },
  editor: {
    "& .ql-container.ql-snow": {
      fontSize: theme.spacing(1),
      fontFamily: "inherit",
      wordBreak: "break-all",
      minHeight: "20vh",
      [theme.breakpoints.up("sm")]: {
        minHeight: "calc(100vh - 15rem)",
      },
    },
  },
}));

const Editor = () => {
  const classes = useStyles();
  return (
    <div className="editor__container">
      <div className="editor">
        <Editor_Format />
        <ReactQuill
          className={classes.editor}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  );
};

export default Editor;
