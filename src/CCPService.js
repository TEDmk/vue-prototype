export default class CCPService {
  constructor() { }
  getApplications() {
    let apps = [
      {
        name: "OSF",
        id: "edd1c473-94d3-470f-a5c7-09fa2e8ae5c4",
        status: "ACTIVE",
      },
      {
        name: "OSC",
        id: "f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4",
        status: "CREATING",
      },
    ];
    return this.waitPromise(apps);
  }
  getApplication(id) {
    let apps = {
      "edd1c473-94d3-470f-a5c7-09fa2e8ae5c4": {
        name: "OSF",
        id: "edd1c473-94d3-470f-a5c7-09fa2e8ae5c4",
        status: "ACTIVE",
      },
      "f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4": {
        name: "OSC",
        id: "f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4",
        status: "CREATING",
      },
    };
    return this.waitPromise(apps[id])
  }
  getEnvironments(id) {
    let apps = {
      "edd1c473-94d3-470f-a5c7-09fa2e8ae5c4": [{
        name: "DEV",
        status: "ACTIVE",
        type: "non-prd",
      }, {
        name: "UAT",
        status: "ACTIVE",
        type: "non-prd",
      },
      ],
      "f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4": [{
        name: "DEV",
        status: "ACTIVE",
        type: "non-prd",
      }, {
        name: "UAT",
        status: "ACTIVE",
        type: "non-prd",
      }, {
        name: "PRD",
        status: "ACTIVE",
        type: "prd",
      },
      ],
    };
    return this.waitPromise(apps[id])
  }
  getArtifacts(id) {
    let apps = {
      "edd1c473-94d3-470f-a5c7-09fa2e8ae5c4": [{
        name: "v1.5.2",
        status: "ACTIVE",
      }, {
        name: "v1.5.1",
        status: "ACTIVE",
      },
      ],
      "f2a342ec-94d3-470f-a5c7-09fa2e8ae5c4": [{
        name: "v1.6.0",
        status: "ACTIVE",
      }, {
        name: "v1.5.3",
        status: "ACTIVE",
      }, {
        name: "v1.5.2",
        status: "ACTIVE",
      },
      ],
    };
    return this.waitPromise(apps[id])
  }
  waitPromise(value) {
    return new Promise((resolve, reject) => {
      reject;
      setTimeout(() => {
        resolve(value);
      }, 500);
    });
  }
}