export const extractMaritialStatus = (list) => {
  const arr = list.map((element) => {
    const { id, maritalStatus: name } = element;
    return { id, name };
  });
  return arr;
};

export const extractGender = (list) => {
  const arr = list.map((element) => {
    const { genderTypeId: id, genderType: name } = element;
    return { id, name };
  });
  return arr;
};

export const extractDate = (date) => {
  if (date) {
    const dates = new Date(date);
    return dates.toISOString().substring(0, 10);
  }
  return date;
};

export const extractOfficeList = (list) => {
  if (list) {
    const extractOffice = list.map((element) => {
      const { Id: id, Name: name } = element;
      return { id, name };
    });
    return extractOffice;
  }
  return "";
};

export const extractAccountTypeList = (list) => {
  if (list) {
    const bankList = list.map((element) => {
      const { id, name } = element;
      return { id, name };
    });
    return bankList;
  }
  return " ";
};

export const extractJobStatus = (list) => {
  if (list) {
    const item = list.map((element) => {
      const { JobStatusID: id, Description: name } = element;
      return { id, name };
    });
    return item;
  }
  return " ";
};

export const extractPositionList = (list) => {
  if (list) {
    const item = list.map((element) => {
      const { positionId: id, positionName: name } = element;
      return { id, name };
    });
    return item;
  }
  return " ";
};
export const extractJobList = (list) => {
  if (list) {
    const item = list.map((element) => {
      const { jobTypeId: id, jobType: name } = element;
      return { id, name };
    });
    return item;
  }
  return " ";
};
export const extractGroupList = (list) => {
  if (list) {
    const item = list.map((element) => {
      const { groupId: id, groupName: name } = element;
      return { id, name };
    });
    return item;
  }
  return " ";
};
export const extractZoneList = (list) => {
  if (list) {
    const item = list.map((element) => {
      const { zoneId: id, zoneName: name } = element;
      return { id, name };
    });
    return item;
  }
  return " ";
};
export const extractDistrictList = (list) => {
  if (list) {
    const item = list.map((element) => {
      const { districtId: id, districtName: name } = element;
      return { id, name };
    });
    return item;
  }
  return " ";
};
export const extractVdcList = (list) => {
  if (list) {
    const item = list.map((element) => {
      const { vdcId: id, vdcName: name } = element;
      return { id, name };
    });
    return item;
  }
  return " ";
};
