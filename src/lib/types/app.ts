export type Validator = (val: string, params?: any) => null | string;


export type ComplaintData = {
    COMPLAINT_ID: string;
    CONTRACT_ID: string;
    PARENT_ORGANIZATION: string;
    REGION_RESPONSIBLE: string;
    CATEGORY: string;
    SUBCATEGORY: string;
    SUBCATEGORY_OTHER: string;
    COMPLAINT_SUMMARY: string;
    UPDATED_DATE: string;
    CASEWORK: string;
    COMMENT_TEXT: string;
    COMPLAINANT_TYPE: string;
    STATE: string;
    x: number;
    y: number;
    z: number;
    cluster: number;
    topic: string;
  };
  

export type Project = {
    title: string;
    demoLink: string;
    repoLink: string;
    img: string;  
    description: string;
    isPrivateApp: boolean;
    devYear: number
  };