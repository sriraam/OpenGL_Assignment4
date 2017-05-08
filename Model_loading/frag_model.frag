#version 330 core
out vec4 color;

in vec3 FragPos;
in vec4 pos;
in vec3 normal;

in vec3 result;

  uniform vec3 specBool;
  uniform vec3 diffBool;
  uniform vec3 ambientBool;
  uniform vec3 materialcolor;
  uniform vec3 lightPos; 
  uniform vec3 lightColor;
  uniform vec3 viewPos;


void main(){

// Ambient
    float ambientStrength = .8f;
    vec3 ambient = ambientStrength * lightColor * ambientBool;
  	
    // Diffuse 
    vec3 norm = normalize(normal);
    vec3 lightDir = normalize(FragPos - lightPos );
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor * diffBool;

	  // Specular
    float specularStrength = 1.0f;
    vec3 viewDir = normalize(FragPos - viewPos);
    vec3 reflectDir = reflect(lightDir, norm);  
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 90);
    vec3 specular = specularStrength * spec * lightColor * specBool;  

	vec3 result = (ambient+diffuse+specular) * materialcolor;
	
   
	  color= vec4(result,1);

//color = vec4(pos.r+.5,pos.g+.5,pos.b+.5,1);
//color=vec4(1,1,1,1);
}
