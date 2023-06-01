import { registerFileUploader } from "@/components/FileUploader";
import { registerFileListItem } from "@/components/FileListItem";
import { registerGrid } from "@/components/Grid";
import { registerIcon } from "@/components/Icon";
import { registerIconButton } from "@/components/IconButton";
import { registerInputAdornment } from "@/components/InputAdornment";
import { registerInputBase } from "@/components/InputBase";
import { registerList } from "@/components/List";
import { registerListItem } from "@/components/ListItem";
import { registerListItemAvatar } from "@/components/ListItemAvatar";
import { registerListItemButton } from "@/components/ListItemButton";
import { registerListItemIcon } from "@/components/ListItemIcon";
import { registerListItemText } from "@/components/ListItemText";
import { registerOutlinedInput } from "@/components/OutlinedInput";
import { registerPaper } from "@/components/Paper";
import { registerScheduler } from "@/components/Scheduler";
import { registerStack } from "@/components/Stack";
import { registerTypography } from "@/components/Typography";
import { registerToggleButton } from "@/components/ToggleButton";
import { registerToggleButtonGroup } from "@/components/ToggleButtonGroup";
import { registerUpload } from "@/components/Upload";
import { registerWithToast } from "@/components/Toaster";
import { registerTooltip } from "@/components/Tooltip";
import { registerToolbar } from "@/components/Toolbar";

export function registerAll() {
  registerFileListItem();
  registerFileUploader();
  registerGrid(styleProps);
  registerIcon();
  registerInputAdornment();
  registerIconButton();
  registerInputBase();
  registerList();
  registerListItem();
  registerListItemAvatar();
  registerListItemButton();
  registerListItemIcon();
  registerListItemText();
  registerOutlinedInput();
  registerPaper(styleProps);
  registerStack(styleProps);
  registerToggleButton();
  registerToggleButtonGroup();
  registerToolbar(styleProps);
  registerTooltip();
  registerTypography(styleProps);
  registerUpload();
  registerWithToast();
}

const styleNumberProp = {
  type: "number",
  advanced: true,
};

export const styleProps = {
  alignItems: {
    type: "choice",
    options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
  },
  justifyContent: {
    type: "choice",
    options: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
  },
  padding: styleNumberProp,
  paddingX: styleNumberProp,
  paddingY: styleNumberProp,
  paddingTop: styleNumberProp,
  paddingBottom: styleNumberProp,
  paddingLeft: styleNumberProp,
  paddingRight: styleNumberProp,
  margin: styleNumberProp,
  marginX: styleNumberProp,
  marginY: styleNumberProp,
  marginTop: styleNumberProp,
  marginBottom: styleNumberProp,
  marginLeft: styleNumberProp,
  marginRight: styleNumberProp,
};
