// Type definitions for react-native-material-ui 1.12
// Project: https://github.com/xotahal/react-native-material-ui
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component } from 'react';
import { ViewStyle, TextStyle, Image } from 'react-native';

export interface ActionButtonProps {
    actions?: string[] | JSX.Element[] | Array<{
        icon: string | JSX.Element
        label: string
        name: string
    }>;
    hidden?: boolean;
    icon?: string;
    style?: {
        container?: ViewStyle
        icon?: TextStyle
    };
    transition?: 'toolbar' | 'speedDial';
    onPress?(): void;
    onLongPress?(): void;
}

/**
 * Action Button
 *
 * @export
 * @class ActionButton
 * @extends {Component<ActionButtonProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/ActionButton/ActionButton.react.js
 */
export class ActionButton extends Component<ActionButtonProps, any> {}

export interface AvatarProps {
    image?: Image;
    icon?: string;
    iconColor?: string;
    iconSize?: number;
    text?: string;
    size?: number;
    style?: {
        container?: ViewStyle
        content?: ViewStyle
    };
}

/**
 * Avatar
 *
 * @export
 * @class Avatar
 * @extends {Component<AvatarProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Avatar/Avatar.react.js
 */
export class Avatar extends Component<AvatarProps, any> {}

export interface BadgeProps {
    children?: JSX.Element;
    text?: string;
    icon?: string | { name: string, color: string, size: string };
    size?: number;
    stroke?: number;
    accent?: boolean;
    style?: {
        container?: ViewStyle
        content?: ViewStyle
        strokeContainer?: ViewStyle
    };
}

/**
 * Badge
 *
 * @export
 * @class Badge
 * @extends {Component<BadgeProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Badge/Badge.react.js
 */
export class Badge extends Component<BadgeProps, any> {}

export interface BottomNavigationProps {
    active?: string;
    children: JSX.Element | JSX.Element[];
    hidden?: boolean;
    style?: {
        container?: ViewStyle
    };
}

/**
 * Bottom Navigation
 *
 * @export
 * @class BottomNavigation
 * @extends {Component<BottomNavigationProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/BottomNavigation/BottomNavigation.react.js
 */
export class BottomNavigation extends Component<BottomNavigationProps, any> {}

export interface BottomNavigationAction {
    icon: JSX.Element | string;
    label?: string;
    key?: string;
    active: boolean;
    disabled?: boolean;
    style?: {
        container?: ViewStyle
        active?: TextStyle
        disabled?: TextStyle
    };
    onPress?(): void;
}

export namespace BottomNavigation {
    class Action extends Component<BottomNavigationAction, any> {}
}

export interface ButtonProps {
    text: string;
    primary?: boolean;
    accent?: boolean;
    disabled?: boolean;
    raised?: boolean;
    upperCase?: boolean;
    icon?: string | JSX.Element;
    style?: {
        container?: ViewStyle
        text?: TextStyle
    };
    onPress?(): void;
    onLongPress?(): void;
}

/**
 * Button
 *
 * @export
 * @class Button
 * @extends {Component<ButtonProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Button/Button.react.js
 */
export class Button extends Component<ButtonProps, any> {}

export interface CardProps {
    children?: JSX.Element;
    style?: {
        container?: ViewStyle
    };
    onPress?(): void;
}

/**
 * Card
 *
 * @export
 * @class Card
 * @extends {Component<CardProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Card/Card.react.js
 */
export class Card extends Component<CardProps, any> {}

export interface CheckBoxProps {
    label: string;
    value: string | number;
    checked?: boolean;
    disabled?: boolean;
    uncheckedIcon?: string;
    checkedIcon?: string;
    style?: {
        icon?: ViewStyle
        container?: ViewStyle
        label?: TextStyle
    };
    onCheck(checked: boolean): void;
}

/**
 * Checkbox
 *
 * @export
 * @class Checkbox
 * @extends {Component<CheckBoxProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Checkbox/Checkbox.react.js
 */
export class Checkbox extends Component<CheckBoxProps, any> {}

export interface DialogProps {
    children: JSX.Element | JSX.Element[];
    style?: {
        container?: ViewStyle
    };
    onPress?(): void;
}

/**
 * Dialog
 *
 * @export
 * @class Dialog
 * @extends {Component<DialogProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/Dialog.react.js
 */
export class Dialog extends Component<DialogProps, any> {}

export interface DialogTitleProps {
    children: JSX.Element;
    style?: {
        titleContainer?: ViewStyle
        titleText?: TextStyle
    };
}

export interface DialogContentProps {
    children: JSX.Element;
    style?: {
        contentContainer?: ViewStyle
    };
}

export interface DialogActionsProps {
    children: JSX.Element;
    style?: {
        actionsContainer?: ViewStyle
    };
}

export namespace Dialog {
    class Title extends Component<DialogTitleProps, any> {}
    class Content extends Component<DialogContentProps, any> {}
    class Actions extends Component<DialogActionsProps, any> {}
}

export interface DialogDefaultActionsProps {
    actions: string[];
    style?: {
        defaultActionsContainer?: ViewStyle
    };
    onActionPress(action: string): void;
}

/**
 * Dialog Default Actions
 *
 * @export
 * @class DialogDefaultActions
 * @extends {Component<DialogDefaultActionsProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/DialogDefaultActions.react.js
 */
export class DialogDefaultActions extends Component<DialogDefaultActionsProps, any> {}

export interface DialogStackedActionsProps {
    actions: string[];
    style?: {
        stackedActionsContainer?: ViewStyle
    };
    onActionPress(action: string): void;
}

/**
 * Dialog Stacked Actions
 *
 * @export
 * @class DialogStackedActions
 * @extends {Component<DialogStackedActionsProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Dialog/DialogStackedActions.react.js
 */
export class DialogStackedActions extends Component<DialogStackedActionsProps, any> {}

export interface DividerProps {
    inset?: boolean;
    style?: {
        container?: ViewStyle
    };
}

/**
 * Divider;
 *
 * @export
 * @class Divider
 * @extends {Component<DividerProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Divider/Divider.react.js
 */
export class Divider extends Component<DividerProps, any> {}

export interface DrawerProps {
    children: JSX.Element;
    style?: {
        container?: ViewStyle
    };
}

export interface DrawerHeaderProps {
    image?: Image[];
    backgroundColor?: string;
    children?: JSX.Element;
    style?: {
        container?: ViewStyle
        contentContainer?: ViewStyle
    };
}

export interface DrawerSectionItem {
    icon?: string;
    value?: string | JSX.Element;
    label?: string;
    active?: boolean;
    disabled?: boolean;
    onPress?(): void;
    onLongPress?(): void;
}

export interface DrawerSectionProps {
    title?: string;
    items: DrawerSectionItem[];
    divider?: boolean;
    style?: {
        container?: ViewStyle
        item?: ViewStyle
        subheader?: TextStyle
        icon?: ViewStyle
        value?: TextStyle
        label?: TextStyle
    };
}

export interface DrawerHeaderAccountProps {
    avatar?: JSX.Element;
    accounts?: Array<{
        avatar?: JSX.Element
        onPress?(): void
    }>;
    footer?: {};
    style?: {
        container?: ViewStyle
        accountContainer?: ViewStyle
        topContainer?: ViewStyle
        avatarsContainer?: ViewStyle
        activeAvatarContainer?: ViewStyle
        inactiveAvatarContainer?: ViewStyle
    };
}

/**
 * Drawer
 *
 * @export
 * @class Drawer
 * @extends {Component<DrawerProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Drawer/Drawer.react.js
 */
export class Drawer extends Component<DrawerProps, any> {}
export namespace Drawer {
    class Header extends Component<DrawerHeaderProps, any> {}
    namespace Header {
        class Account extends Component<DrawerHeaderAccountProps, any> {}
    }
    class Section extends Component<DrawerSectionProps, any> {}
}

export interface IconProps {
    name: string;
    style?: ViewStyle | ViewStyle[];
    size?: number;
    color?: string;
}

/**
 * Icon
 *
 * @export
 * @class Icon
 * @extends {Component<IconProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Icon/index.js
 */
export class Icon extends Component<IconProps, any> {}

export interface IconToggleProps {
    color?: string;
    underlayColor?: string;
    maxOpacity?: number;
    percent?: number;
    disabled?: boolean;
    size?: number;
    name: string;
    children?: JSX.Element;
    style?: {
        container?: ViewStyle
        icon?: ViewStyle
    };
    onPress?(): void;
}

/**
 * Icon Toggle
 *
 * @export
 * @class IconToggle
 * @extends {Component<IconToggleProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/IconToggle/IconToggle.react.js
 */
export class IconToggle extends Component<IconToggleProps, any> {}

export interface ListItemCenterElement {
    primaryText: string;
    secondaryText?: string;
    tertiaryText?: string;
}

export interface ListItemStyle {
    container?: ViewStyle;
    content?: ViewStyle;
    contentViewContainer?: ViewStyle;
    leftElementContainer?: ViewStyle;
    centerElementContainer?: ViewStyle;
    textViewContainer?: ViewStyle;
    primaryText?: TextStyle;
    firstLine?: TextStyle;
    primaryTextContainer?: ViewStyle;
    secondaryText?: TextStyle;
    tertiaryText?: TextStyle;
    rightElementContainer?: ViewStyle;
    rightElement?: TextStyle;
    LeftElement?: TextStyle;
}

export interface ListItemProps {
    numberOfLines?: 1 | 2 | 3 | 'dynamic';
    leftElement?: JSX.Element | string;
    rightElement?: JSX.Element | string;
    centerElement: JSX.Element | string | ListItemCenterElement;
    style?: ListItemStyle;
    dense?: boolean;
    divider?: boolean;
    onPressValue?: any;
    onPress?(): void;
    onRightElementPress?(): void;
}

/**
 * List Item
 *
 * @export
 * @class ListItem
 * @extends {Component<ListItemProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/ListItem/ListItem.react.js
 */
export class ListItem extends Component<ListItemProps, any> {}

export interface RadioButtonProps {
    label: string;
    value: string | number;
    checked?: boolean;
    disabled?: boolean;
    theme?: string;
    onSelect(value: string): void;
}

/**
 * Radio Button
 *
 * @export
 * @class RadioButton
 * @extends {Component<RadioButtonProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/RadioButton/RadioButton.react.js
 */
export class RadioButton extends Component<RadioButtonProps, any> {}

export interface SubheaderProps {
    text: string;
    inset?: boolean;
    lines?: number;
    style?: {
        container?: ViewStyle
        text?: TextStyle
    };
}

/**
 * Subheader
 *
 * @export
 * @class Subheader
 * @extends {Component<SubheaderProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Subheader/Subheader.react.js
 */
export class Subheader extends Component<SubheaderProps, any> {}

export interface ToolbarStyle {
    container?: ViewStyle;
    leftElementContainer?: ViewStyle;
    leftElement?: TextStyle;
    centerElementContainer?: ViewStyle;
    titleText?: TextStyle;
    rightElementContainer?: ViewStyle;
    rightElement?: TextStyle;
}

export interface Searchable {
    placeholder?: string;
    autoFocus?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    onChangeText?(text: string): void;
    onSearchClosed?(): void;
    onSearchPressed?(): void;
    onSubmitEditing?(): void;
}

export interface ToolBarRightElement {
    actions?: Array<JSX.Element | string>;
    menu?: {icon: string, labels: string[]};
}

export interface ToolbarProps {
    isSearchActive?: boolean;
    size?: number;
    hidden?: boolean;
    leftElement?: JSX.Element | string;
    rightElement?: JSX.Element | string | string[] | ToolBarRightElement;
    centerElement?: JSX.Element | string;
    style?: ToolbarStyle;
    searchable?: Searchable;
    onPress?(): void;
    onLeftElementPress?(): void;
    onRightElementPress?(): void;
}

/**
 * Toolbar
 *
 * @export
 * @class Toolbar
 * @extends {Component<ToolbarProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Toolbar/Toolbar.react.js
 */
export class Toolbar extends Component<ToolbarProps, any> {}

export interface SnackbarProps {
    message: string;
    visible: boolean;
    timeout: number;
    bottomNavigation: boolean;
    actionText?: string;
    button?: ButtonProps;
    style?: {
        container?: ViewStyle
        message?: ViewStyle
    };
    onRequestClose(): void;
    onActionPress?(): void;
}

/**
 * Snackbar
 *
 * @export
 * @class Snackbar
 * @extends {Component<SnackbarProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/Snackbar/Snackbar.react.js
 */
export class Snackbar extends Component<SnackbarProps, any> {}

export interface RippleFeedbackProps {
    color?: string;
    borderless?: boolean;
    children: JSX.Element;
}

/**
 * Ripple Feedback
 *
 * @export
 * @class RippleFeedback
 * @extends {Component<IRippleFeedback, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/RippleFeedback/RippleFeedback.react.js
 */
export class RippleFeedback extends Component<RippleFeedbackProps, any> {}

export interface ThemeProviderProps {
    uiTheme: {};
    children: JSX.Element;
}

/**
 * ThemeProvider
 *
 * @export
 * @class ThemeProvider
 * @extends {Component<ThemeProviderProps, any>}
 * @see https://github.com/xotahal/react-native-material-ui/blob/master/src/styles/ThemeProvider.react.js
 */
export class ThemeProvider extends Component<ThemeProviderProps, any> {}

export interface MKColorStatic {
    Amber: string;
    Blue: string;
    BlueGrey: string;
    Brown: string;
    Cyan: string;
    DeepOrange: string;
    DeepPurple: string;
    Green: string;
    Grey: string;
    Indigo: string;
    LightBlue: string;
    LightGreen: string;
    Lime: string;
    Orange: string;
    Pink: string;
    Purple: string;
    RGBIndigo: string;
    RGBPink: string;
    RGBPurple: string;
    RGBTeal: string;
    Red: string;
    Silver: string;
    Teal: string;
    Transparent: string;
    Yellow: string;
    default: {
      Amber: string;
      Blue: string;
      BlueGrey: string;
      Brown: string;
      Cyan: string;
      DeepOrange: string;
      DeepPurple: string;
      Green: string;
      Grey: string;
      Indigo: string;
      LightBlue: string;
      LightGreen: string;
      Lime: string;
      Orange: string;
      Pink: string;
      Purple: string;
      RGBIndigo: string;
      RGBPink: string;
      RGBPurple: string;
      RGBTeal: string;
      Red: string;
      Silver: string;
      Teal: string;
      Transparent: string;
      Yellow: string;
    };
    palette_blue_400: string;
    palette_green_500: string;
    palette_red_500: string;
    palette_yellow_600: string;
  }

export const MKColor: MKColorStatic;
