package entity;

public class Registration {
    private String name;
    private int phoneNumber;
    private String email;
    private String conditionType;
    private String source;
    private String outlet;
    private Boolean hasContacted;
    private Boolean hasFirstAppt;

    public Registration() {
    }

    public Registration(String name, int phoneNumber, String email, String conditionType, String source, String outlet,
            Boolean hasContacted, Boolean hasFirstAppt) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.conditionType = conditionType;
        this.source = source;
        this.outlet = outlet;
        this.hasContacted = hasContacted;
        this.hasFirstAppt = hasFirstAppt;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPhoneNumber() {
        return this.phoneNumber;
    }

    public void setPhoneNumber(int phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getConditionType() {
        return this.conditionType;
    }

    public void setConditionType(String conditionType) {
        this.conditionType = conditionType;
    }

    public String getSource() {
        return this.source;
    }

    public void setSource(String source) {
        this.source = source;
    }

     public String getOutlet() {
        return this.outlet;
    }

    public void setOutlet(String outlet) {
        this.outlet = outlet;
    }

    public Boolean isHasContacted() {
        return this.hasContacted;
    }

    public Boolean getHasContacted() {
        return this.hasContacted;
    }

    public void setHasContacted(Boolean hasContacted) {
        this.hasContacted = hasContacted;
    }

    public Boolean isHasFirstAppt() {
        return this.hasFirstAppt;
    }

    public Boolean getHasFirstAppt() {
        return this.hasFirstAppt;
    }

    public void setHasFirstAppt(Boolean hasFirstAppt) {
        this.hasFirstAppt = hasFirstAppt;
    }

}
