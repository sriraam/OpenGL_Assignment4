#version 330 core
layout(location = 0) in vec3 vertexPosition;
layout(location=1) in vec3 vertexNormal;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

 uniform vec3 materialcolor;
  uniform vec3 lightPos; 
  uniform vec3 lightColor;
  uniform vec3 viewPos;

  out vec3 result;

 vec3 FragPos;
 vec4 pos;
 vec3 normal;

void main(){
pos=vec4(vertexPosition,1);
gl_Position=projection *view* model*vec4(vertexPosition,1);

 FragPos = vec3(view* model * vec4(vertexPosition, 1.0f));



vec3 NormalCameraspace =  vec3((view*model)*vec4(vertexNormal,0.0));
normal=mat3(transpose(inverse(model)))*NormalCameraspace;
//normal=NormalCameraspace;
//normal=vertexNormal;

  // vec3 normalEyeSpace = vec3(view*model*vec4(normal,0.0));
	// Normal = mat3(transpose(inverse(model))) * normalEyeSpace;  


	 // Ambient
    float ambientStrength = .8f;
    vec3 ambient = ambientStrength * lightColor;
  	
    // Diffuse 
    vec3 norm = normalize(normal);
    vec3 lightDir = normalize(FragPos - lightPos );
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;

	  // Specular
    float specularStrength = 1.0f;
    vec3 viewDir = normalize(FragPos - viewPos);
    vec3 reflectDir = reflect(-lightDir, norm);  
    float spec = pow(max(dot(viewDir, reflectDir), 0.0), 100);
    vec3 specular = specularStrength * spec * lightColor;  


	 result = (ambient+diffuse+specular) * materialcolor;



}