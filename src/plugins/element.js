import Vue from 'vue'
import {
    Button,
    Container,
    Header,
    Aside,
    Main,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tabs,
    TabPane,
    Progress,
    Row,
    Col,
    Select,
    Option,
    Table,
    TableColumn,
    Input,
    Pagination,
    Loading,
    MessageBox,
    Message,
    Breadcrumb,
    BreadcrumbItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Form,
    FormItem,
    RadioGroup,
    RadioButton,
    CheckboxGroup,
    Checkbox,
    DatePicker,
    TimeSelect,
    TimePicker,
    Transfer,
    Steps,
    Step,
    Dialog,
    Upload,
    Switch,
    Tree,
    Radio,
    Autocomplete,
    tooltip
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Progress)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Loading.directive)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Transfer)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Switch)
Vue.use(Tree)
Vue.use(Autocomplete)
Vue.use(tooltip)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)