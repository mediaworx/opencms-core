package com.opencms.file;

import java.util.*;

/**
 * This abstract class describes a user.
 * 
 * @author Andreas Schouten
 * @author Michael Emmerich
 * @version $Revision: 1.8 $ $Date: 2000/01/28 17:42:30 $
 */
public abstract class A_CmsUser {
	
	/**
	 * Gets the login-name of the user.
	 * 
	 * @return the login-name of the user.
	 */
	abstract public String getName();
	
	/**
	 * Gets the id of this user.
	 * 
	 * @return the id of this user.
	 */
	abstract public int getId();
	
	/**
	 * Gets the description of this user.
	 * 
	 * @return the description of this user.
	 */
	abstract public String getDescription();
	
    /**
     * Desides, if this user is disabled.
     * 
     * @return USER_FLAGS == C_FLAG_DISABLED
     */
    abstract public boolean getDisabled();
	
    /**
     * Disables the user flags by setting them to C_FLAG_DISABLED.
     */
    abstract public void  setDisabled();
    
    /**
     * Enables the user flags by setting them to C_FLAG_ENABLED.
     */
    abstract public void  setEnabled();

	/**
	 * Returns a string-representation for this object.
	 * This can be used for debugging.
	 * 
	 * @return string-representation for this object.
	 */
	abstract public String toString();
	
	/**
	 * Compares the overgiven object with this object.
	 * 
	 * @return true, if the object is identically else it returns false.
	 */
    abstract public boolean equals(Object obj);

    /**
     * Returns the default group object of this user.
     * 
     * @return Default Group of the user
     */
    public abstract A_CmsGroup getDefaultGroup();
    
    /**
     * Sets the default group object of this user.
     * 
     * @param defaultGroup The default group of this user.
     */
    abstract void setDefaultGroup(A_CmsGroup defaultGroup);
    
          
	/**
	 * Returns additional information about the user. <BR/>
	 * Additional infos are for example emailadress, adress or surname...<BR/><BR/>
	 * 
	 * The additional infos must be requested via the CmsObject.
	 * 
	 * 
	 * @param key the key to the additional information.
	 * 
	 * Returns additional information about the user. If the additional info
	 * does not exists, it returns null.
	 * 
	 */
	abstract public Object getAdditionalInfo(String key);
    
     /**
	 * Sets additional information about the user. <BR/>
	 * Additional infos are for example emailadress, adress or surname...<BR/><BR/>
	 * 
	 * 
	 * @param key The key to the additional information.
	 * @param obj The additinoal information value.
	 * 
	 */
	abstract void setAdditionalInfo(String key, Object obj);
    
    /**
	 * Returns the complete Hashtable with additional information about the user. <BR/>
	 * Additional infos are for example emailadress, adress or surname...<BR/><BR/>
	 * 
	 * The additional infos must be requested via the CmsObject.
	 * 
	 * 
	 * Returns additional information about the user. 
	 * 
	 */
    abstract public Hashtable getAdditionalInfo();
	
     /**
	 * Sets the  complete Hashtable with additional information about the user. <BR/>
	 * Additional infos are for example emailadress, adress or surname...<BR/><BR/>
	 * 
	 * This method has package-visibility for security-reasons.
	 * It is required to because of the use of two seprate databases for user data and
	 * additional user data.
	 * 
	 */
    abstract void setAdditionalInfo(Hashtable additionalInfo);
    
	/**
	 * Returns the user email.
	 * 
	 * @return the USER_EMAIL, or null.
	 */
	abstract public String getEmail();
    
    /**
     * Sets the user email.
	 * 
	 * @param value The new email adress.
     */
    
	abstract void setEmail(String value);

	/**
	 * Sets the firstname.
	 * 
	 * @param the USER_FIRSTNAME.
	 */
	abstract void setFirstname(String firstname);
	
	/**
	 * Gets the firstname.
	 * 
	 * @return the USER_FIRSTNAME, or null.
	 */
	abstract public String getFirstname();

	/**
	 * Sets the lastname.
	 * 
	 * @param the USER_SURNAME.
	 */
	abstract void setLastname(String lastname);
	
	/**
	 * Gets the lastname.
	 * 
	 * @return the USER_SURNAME, or null.
	 */
	abstract public String getLastname();
	
	/**
	 * This is a shortcut for: <pre>getAdditionalInfo(C_ADDITIONAL_INFO_ADDRESS);</pre>
	 * 
	 * @return the USER_ADDRESS, or null.
	 */
	abstract public String getAddress();
    
     /**
	 * This is a shortcut for: <pre>setAdditionalInfo(C_ADDITIONAL_INFO_ADDRESS,value);</pre>
     *	 
     * @param value The user adress.
	 */
	abstract void setAddress(String value);

	/**
	 * This is a shortcut for: <pre>getAdditionalInfo(C_ADDITIONAL_INFO_SECTION);</pre>
	 * 
	 * @return the USER_SECTION, or null.
	 */
	abstract public String getSection();
    
     /**
	 * This is a shortcut for: <pre>setAdditionalInfo(C_ADDITIONAL_INFO_SECTION,value);</pre>
	 * 
	 * @param value The new user section.
	 */
	abstract void setSection(String value);
    /**
	 * This is a shortcut for: <pre>getAdditionalInfo(C_ADDITIONAL_INFO_DEFAULTGROUP_ID);</pre>
	 * 
	 * @return the USER_DEFAULTGROUP_ID, or C_UNKNOWN_ID;.
	 */
	abstract public int getDefaultGroupId();
    
    /**
	 * Gets the lastlogin time.
	 * 
	 * @return the USER_LASTLOGIN, or C_UNKNOWN_LONG.
	 */
	abstract public long getLastlogin();

    /**
	 * Sets the lastlogintime.
	 * 
	 * @param value The last login of the user.
	 */
	abstract void setLastlogin(long value);
    
    /**
	 * Gets the lastused time.
	 * 
	 * @return the USER_LASTLOGIN, or C_UNKNOWN_LONG.
	 */
	abstract public long getLastUsed();

    /**
	 * Sets the last used time.
	 * 
	 * @param value The last login of the user.
	 */
	abstract void setLastUsed(long value);
	
    /**
	 * Gets the flags.
	 * 
	 * @return the USER_FLAGS, or C_UNKNOWN_INT.
	 */
	abstract public int getFlags();

     /**
	 * Sets the flags.
	 * 
	 * @param value The new user flags.
	 */
	abstract void setFlags(int value);
}
