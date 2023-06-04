import { REPORT_TITLE, SYSTEM_NAME } from './../config/constants';

const Report = () => {

    document.title = REPORT_TITLE + ' | ' + SYSTEM_NAME

    return (
        <>
            <h1>Report</h1>
        </>
    )
}

export default Report
